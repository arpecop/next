import Layout from "@/components/Main";
import { ResizerTester } from "@/components/Resizer";
import dynamic from "next/dynamic";

const Resizer = dynamic(() => import("@/components/Resizer"), {
  ssr: false,
});
const ResizerGPT = dynamic(() => import("@/components/Resizergpt"), {
  ssr: false,
});

const MyComponent = () => {
  return (
    <div className='h-screen bg-black'>
      <ResizerGPT
        width={800}
        customwidth={900}
        height={400}
        src='http://localhost:3000'
      />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { date: new Date().toString() }, // will be passed to the page component as props
  };
}

export default MyComponent;
