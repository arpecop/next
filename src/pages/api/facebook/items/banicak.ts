import { shuffle } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const items = [
	{ info: "Едно нестихващо веселие ще бъде твоето ежедневие" },
	{ info: "Едно нестихващо веселие ще бъде твоето ежедневие" },
	{
		newurl: "https://arpecop.net/angel/tab/data/kolednaimg/2.jpg",
		info: "Богата нова година, ама яка гърбина",
	},
	{
		newurl: "https://arpecop.net/angel/tab/data/kolednaimg/3.jpg",
		info: "Любов необяснима през цялата нова година!",
	},
	{
		newurl: "https://arpecop.net/angel/tab/data/kolednaimg/4.jpg",
		info: "Увенчани с успех дела - за награда - нова кола!",
	},
	{
		newurl: "https://arpecop.net/angel/tab/data/kolednaimg/5.jpg",
		info: "Джакпот изтегли днес - ще караш Мерцедес ",
	},
	{
		newurl: "https://arpecop.net/angel/tab/data/kolednaimg/6.jpg",
		info: "Любов сърцето ти ще грее, когато зима преспи вее",
	},
	{
		newurl: "https://arpecop.net/angel/tab/data/kolednaimg/7.jpg",
		info: "Ще заживееш в новата си къща. А тъщата?",
	},
	{
		newurl: "https://arpecop.net/angel/tab/data/kolednaimg/8.jpg",
		info: "Кристална капка. Дали е жива вода или сълзица?",
	},
	{
		newurl: "https://arpecop.net/angel/tab/data/kolednaimg/9.jpg",
		info: "Усмивка, смях. Не ги пази! Раздавай! За да усетиш",
	},
	{
		newurl: "https://arpecop.net/angel/tab/data/kolednaimg/10.jpg",
		info: "Купони предстоят ти щури с отлежало уиски и хавански пури. ",
	},
	{
		newurl: "https://arpecop.net/angel/tab/data/kolednaimg/11.jpg",
		info: "Предстои за теб велик и жадуван звезден миг. ",
	},
	{
		newurl: "https://arpecop.net/angel/tab/data/kolednaimg/12.jpg",
		info: "Надеждата в живота ти навлиза с билет самолетен и виза. ",
	},
	{
		newurl: "https://arpecop.net/angel/tab/data/kolednaimg/13.jpg",
		info: "Новата година нов късмет ти праща - работа намираш подходяща. ",
	},
	{
		newurl: "https://arpecop.net/angel/tab/data/kolednaimg/14.jpg",
		info: "Мечтите ти крила ти дават и от сън реалност стават. ",
	},
	{
		newurl: "https://arpecop.net/angel/tab/data/kolednaimg/15.jpg",
		info: " В бизнеса постигаш завидни резултати. ",
	},
	{
		info: "Приятели ще имаш верни, щури, диви и модерни. ",
	},
	{
		info: "С Новата година късмет избра си нов ще намериш свойта истинска любов.",
	},
	{
		info: "В игра джакпота ще уцелиш и крупна сума ще спечелиш. ",
	},
	{
		info: "Ще имаш приятели нови, за тебе на всичко готови. ",
	},
	{
		info: "Тоз късмет за теб утеха - вървиш нагоре към успеха.",
	},
	{
		info: "Голям късмет избра си, браво, ще се радваш на отлично здраве. ",
	},
	{
		info: "И тази година добър късмет улучи - пада ти се здраве и благополучие. ",
	},
	{
		info: "Ще те стигне на Славито славата, щом се трудиш усърдно и здравата. ",
	},
	{
		info: "Майка ти ще се зарадва, че ще вдигнеш бурна сватба. ",
	},
	{
		info: "Забравил всякакъв комплекс, ще мислиш ти само за секс ",
	},
	{
		info: "Смело пристъпвяй напред, късметът ще е с теб навред. ",
	},
	{
		info: "Ще се сбъдне твоята мания - да си душа на цялата компания. ",
	},
	{
		info: "Очаква те радост голяма - супер екскурзия за двама. ",
	},
	{
		info: "Мързелът ти куфара си стяга, от теб далече ще избяга. ",
	},
	{
		info: "Честити и успешни ще са дните, славата те следва по петите. ",
	},
	{
		info: "Пада ти се днес парата – няма вече до заплата ,да се чудиш и се маеш , как да свържеш двата края..",
	},
	{
		info: "Бяла спретната къщурка с две коли отпред ,и мадама за притурка – туй е твоят нов късмет!",
	},
	{
		info: "На тебе Мързелът се пада – да мързелуваш ти приляга! Съвсем ще му отпуснеш края, но късмета ще намериш, зная!",
	},
	{
		info: "А за теб ще е Веселие, това ще е нормално ежедневие. Ще се редят купон подир купон, от теб се чака да им даваш тон.",
	},
	{
		info: "На теб Учение се пада, май това ти най-приляга. Не измисляй как да кръшкаш, имаш още изпити да тръшкаш!",
	},
	{ info: "Пада ти се ненадейно много щастие семейно!" },
	{
		info: "Година те чака красива, съдбовна, ще бъдеш в плен на магия любовна!",
	},
	{ info: "Голям късмет избра си, браво – ще се радваш на отлично здраве!" },
	{
		info: "Тази Коледа реши теб с награда да дари – получаваш безвъзмездно нещо ново и модерно! Ще ни возиш ли, кажи, в колата нова с две врати?",
	},
	{
		info: "Честити и успешни ще са дните, славата те следва по петите. ",
	},
];

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json(shuffle(items)[0]);
};