import Checkbox from "@/components/forms/inputs/Checkbox";
import Radio from "@/components/forms/inputs/Radio";
import Select from "@/components/forms/inputs/Select";

import Input from "@/components/forms/inputs/Input";
import dynamic from "next/dynamic";
const Upload = dynamic(() => import("@/components/forms/inputs/Upload"), {
  suspense: true,
});

import { groupBy, keyBy } from "lodash";
import { Field } from "@/pages/ads";
type Input = {
  type: string;
  name?: string;
  checked?: boolean;
  value: string;
  placeholder: string;
};

export const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const submission: { [key: string]: any } = Object.values(e.target)
    .filter(
      (c) =>
        typeof c.tagName === "string" &&
        (c.tagName.toLowerCase() === "input" ||
          c.tagName.toLowerCase() === "textarea" ||
          c.tagName.toLowerCase() === "select")
    )
    .map((x) => {
      return {
        type: x.type || x.tagName,
        name: x.name,
        checked: x.checked,
        value: x.value,
        placeholder: x.placeholder,
        alt: x.alt,
      };
    }) as Input[];

  const chekerInputs = groupBy(
    submission.filter((x: Input) => x.checked),
    (item) => item.name || item.placeholder
  );

  const formInputs = keyBy(
    submission.filter((item: Input) => {
      return (
        item.type === "text" ||
        item.type === "password" ||
        item.type === "hidden" ||
        item.type === "number" ||
        item.type === "textarea" ||
        item.type === "select"
      );
    }),
    (item) => item.name
  );
  return { ...chekerInputs, ...formInputs };
};

const FormInput = ({
  inputschema,
  submitted,
}: {
  inputschema: Field;
  submitted: boolean;
}) => {
  switch (inputschema.type) {
    case "upload":
      return <Upload />;

    case "region":
      return (
        <Select
          name='region'
          placeholder='Регион'
          required={true}
          submitted={submitted}
          options={["1"]}
        />
      );
    case "number":
      return (
        <Input
          type='number'
          name={inputschema.name}
          placeholder={inputschema.placeholder}
          required={inputschema.required}
          after={inputschema.after}
          submitted={submitted}
        />
      );
    case "textarea":
      return (
        <Input
          type='textarea'
          name={inputschema.name}
          placeholder={inputschema.placeholder}
          required={inputschema.required}
          submitted={submitted}
        />
      );
    case "textarea":
      return (
        <Input
          type='textarea'
          name={inputschema.name}
          placeholder={inputschema.placeholder}
          required={inputschema.required}
          submitted={submitted}
        />
      );
    case "select":
      return (
        <Select
          name={inputschema.name}
          placeholder={inputschema.placeholder}
          required={inputschema.required}
          submitted={submitted}
          options={inputschema.options}
        />
      );
    case "hidden":
      return (
        <Input
          type='hidden'
          name={inputschema.name}
          placeholder={inputschema.placeholder}
          required={false}
          value={inputschema.value}
        />
      );
    case "checkbox":
      return (
        <Checkbox
          name={inputschema.name}
          placeholder={inputschema.placeholder}
          required={inputschema.required}
          options={inputschema.options || [""]}
          submitted={submitted}
        />
      );
    case "radio":
      return (
        <Radio
          name={inputschema.name}
          placeholder={inputschema.placeholder}
          required={inputschema.required}
          options={inputschema.options}
          submitted={submitted}
        />
      );
    default:
      return (
        <Input
          type='text'
          name={inputschema.name}
          placeholder={inputschema.placeholder}
          required={inputschema.required}
          after={inputschema.after}
          submitted={submitted}
        />
      );
  }
};
export default FormInput;
