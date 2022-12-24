import Header from "@/components/Layouts/Header";
import { ReactNode } from "react";

import Footer from "./Footer";

type IMainProps = {
	meta: ReactNode;
	children: ReactNode;
	hideFooter?: boolean;
	title?: string;
	noContainer?: boolean;
};

const Main = (props: IMainProps) => {
	return (
		<div className='flex min-h-screen flex-col'>
			{props.meta}
			<Header title={props.title} />
			{props.noContainer ? (
				<main className='flex grow flex-col z-30'>{props.children}</main>
			) : (
				<main className='container mx-auto flex grow flex-col justify-center z-30'>
					{props.children}
				</main>
			)}

			<Footer hideFooter={props.hideFooter} />
		</div>
	);
};
// dasd
export default Main;
