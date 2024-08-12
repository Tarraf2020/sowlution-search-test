const HandleHighlightText = (text, searchText) => {
  if (!searchText) {
    return text;
  }

  const typedLetters = new RegExp(`(${searchText})`, "gi");
  const blogBodyParts = text.split(typedLetters);

  console.log({ typedLetters, blogBodyParts });

  const newText = blogBodyParts.map((part, index) =>
    typedLetters.test(part) ? (
      <b key={index} style={{ backgroundColor: "yellow" }}>
        {part}
      </b>
    ) : (
      part
    )
  );

  return newText;
};

export default HandleHighlightText;
