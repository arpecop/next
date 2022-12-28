import fs from "fs";
import path from "path";
import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import TextReplacer from "@/components/SVG";
import { GetServerSideProps } from "next/types";

const Index = ({ data }: { data: string }) => {
	return (
		<Main
			meta={
				<Meta
					title="Вицове и забавни котки и мемета"
					description="Вицове и забавни котки и мемета"
				/>
			}
		>
			<TextReplacer
				filename={data}
				replacements={[
					{
						lookforid: "text-1",
						replacewith: "1",
					},
					{
						lookforid: "text-2",
						replacewith: "2",
					},
					{
						lookforid: "text-3",
						replacewith: "3",
					},
				]}
			/>
		</Main>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const filepath = path.join("./public/Artboard.svg");

	const data = fs.readFileSync(filepath, "utf8");

	return {
		props: { data },
	};
};

export default Index;
