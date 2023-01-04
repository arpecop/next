import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";

const Index = (): JSX.Element => {
	return (
		<Main hideFooter meta={<Meta title='Terms of Use' description='Terms' />}>
			<img src='/rudixops.png' width={171} height={40} alt='' />
			<p className='mt-10'>
				RudixOps не носи отговорност за настъпили вреди или пропуснати ползи от
				поместената в сайта информация или от нейното неправилно
				възприемане/тълкуване.
			</p>
			<p>
				Ние се стремим да направим този сайт максимално лесен за работа, но не
				гарантираме и не носим отговорност за неговата непрекъсната работа; за
				несъвместимост с определени компютърни програми; за технически грешки;
				за невъзможност за достъп до сайта поради причини извън нашата
				компетенция и други.
			</p>
		</Main>
	);
};
export async function getStaticProps() {
	return {
		props: { lastupdate: new Date().toISOString() },
	};
}
export default Index;
