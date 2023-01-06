const getStyles = (classNames: string | string[]) => {
  const classNamesString = Array.isArray(classNames)
    ? classNames.join(" ")
    : classNames;
  return classNamesString;
};
export default getStyles;
