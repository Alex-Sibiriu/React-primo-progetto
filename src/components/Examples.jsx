import { useState } from "react";

import Section from "./Section";
import Tabs from "./Tabs";
import TabButton from "./TabButton/TabButton";
import { EXAMPLES } from "../data";

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState();

	function handleClick(selectedButton) {
		setSelectedTopic(selectedButton);
	}

	let tabContent = <p>Please select a topic.</p>;

	if (selectedTopic) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}

	return (
		<Section id="examples" title="Examples">
			<Tabs
				buttonsContainer="menu"
				buttons={
					<>
						<TabButton
							isSelcted={selectedTopic === "components"}
							onClick={() => handleClick("components")}
						>
							Components
						</TabButton>
						<TabButton
							isSelcted={selectedTopic === "jsx"}
							onClick={() => handleClick("jsx")}
						>
							JSX
						</TabButton>
						<TabButton
							isSelcted={selectedTopic === "props"}
							onClick={() => handleClick("props")}
						>
							Props
						</TabButton>
						<TabButton
							isSelcted={selectedTopic === "state"}
							onClick={() => handleClick("state")}
						>
							State
						</TabButton>
					</>
				}
			>
				{tabContent}
			</Tabs>
		</Section>
	);
}
