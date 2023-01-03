import Meta from "@/components/Layouts/Meta";

const Index = (): JSX.Element => {
	return (
		<div className="h-screen">
			<Meta
				title="За нас"
				description="решения, предоставени чрез признати от
    индустрията техники за доставка."
			/>
			RudixOps, облачни и аутсорсинг услуги, както и осигуряване на качество и
			управление на проекти, всички са достъпни чрез нас. Не говорим за сервиз.
			Ние се потапяме във всеки проект, сякаш е наш собствен , работят с
			авангардни технологии и насърчават служителите да подобряват своите твърди
			умения, за да могат да бъдат уверени в бъдещето. Нашата стратегия и
			консултантски специалисти ще ви помогнат да използвате AWS Cloud и
			най-добрите DevOps методологии, за да реализирате вашата бизнес визия. Ние
			предлагаме бизнес концепции за живот чрез комбиниране на технически опит,
			познания в сектора и индустриални връзки със специфични нужди на
			клиентите, което води до надеждни решения, предоставени чрез признати от
			индустрията техники за доставка.
		</div>
	);
};
export async function getStaticProps() {
	return {
		props: { lastupdate: new Date().toISOString() },
	};
}
export default Index;
