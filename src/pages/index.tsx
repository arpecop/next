import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";

const Index = () => {
  //const router = useRouter();
  //const {  query: { type }, } = router;

  return (
    <Main meta={<Meta title='userz.net' description='userz.net' />}>
      USERZ.net
    </Main>
  );
};

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Index;
