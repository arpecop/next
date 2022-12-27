import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";

const Index = (): JSX.Element => {
	return (
		<Main hideFooter meta={<Meta title='Contact' description='Contact' />}>
			<h1 className='text-center text-3xl font-thin'>Contact</h1>
			<div className='mt-10 flex flex-row items-center justify-center'>
				<div className='mb-8 w-full px-3 lg:mb-0 lg:w-1/5'>
					<p className='mb-2 font-bold lg:mb-4 lg:text-lg'>Office</p>
					<p className='lg:text-lg'>14 Parijka Komuna, Varna, Bulgaria</p>
				</div>
				<div className='mb-8 w-full px-3 lg:mb-0 lg:w-1/5'>
					<p className='mb-2 font-bold lg:mb-4 lg:text-lg'>Contacts</p>
					<p className='lg:text-lg'>(+359) 876 358 115 info@rudixops.com</p>
				</div>
			</div>
		</Main>
	);
};
export async function getStaticProps() {
	return {
		props: { lastupdate: new Date().toISOString() },
	};
}
export default Index;
