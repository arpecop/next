const express = require('express')
const app = express()
app.use(express.json({ limit: '50mb' }));
const port = 1337
const simpleGit = require('simple-git');
const { exec } = require('child_process');

console.log('ass2')
function publish(branch) {
	console.log('triggered ' + branch)
	simpleGit().clone('https://github.com/arpecop/next.git', branch, ['--branch', branch], () => {
		const git = simpleGit('/efs/git/' + branch);
		git.checkout(branch, () => {
			git.pull(['--force'], () => {
				exec(`rsync -av --update --exclude='.git' --exclude='out' --exclude='public' --exclude='node_modules' /efs/git/${branch} /app/`, () => {
					exec(`cd /app/${branch} && pnpm install  --prod && pm2 start`, (error, stdout, stderr) => {
						exec('pm2 save');
						exec(`sleep 5 && pm2 restart ${branch}`);
						exec(`rm -rf /efs/git/${branch}`);
						console.log(`stdout: ${stdout}`);
						console.error(`stderr: ${stderr}`);
					})
				})
			})
		})
	});
}

function static(branch) {
	simpleGit().clone('https://github.com/arpecop/next.git', branch, ['--branch', branch], () => {
		const git = simpleGit('/efs/git/' + branch);
		git.checkout(branch, () => {
			git.pull(['--force'], () => {
				exec(`rsync -av --update /efs/git/${branch}/public /app/${branch}`, () => {
					console.log('sync done ' + branch)
				})
			})
		})		
	});
}
//publish('klounbuild')

//const ports
app.get('/', (req, res) => {
	res.end('Hello World')
})

app.post('/', (req, res) => {
	console.log('triggered')
	const { ref } = req.body
	const branch = ref.split('/')[2]
	console.log(branch)
	if (branch.includes('build')) {
		publish(branch)
	} else {
		//static(branch)
	}
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`୦ Git server listening on port  ${port} v 3.0`)
})