const convertToSlug = str => {
  let slug = str.replace(/^\s+|\s+$/g, ""); // trim
  slug = slug.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  const to = "aaaaaeeeeeiiiiooooouuuunc------";
  for (let i = 0, l = from.length; i < l; i++) {
    slug = slug.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  slug = slug
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return slug;
};

const MetaControl = createClass({
  getInitialState: function() {
    return {
      title: "",
      description: "",
      keywords: ""
    };
  },

  // componentDidMount: function() {
  // this.updateMetaData();
  // },

  updateMetaData: function() {
    this.setState(
      {
        title: document.querySelector("input[id^=title]").value.trim(),
        description: document
          .querySelector("textarea[id^=description]")
          .value.trim()
      },
      function() {
        const { title, description, keywords } = this.state;
        const hostname = "https://www.phongduong.me";
        const slug = convertToSlug(title);
        const url = `${hostname}/posts/${slug}.html`;
        const meta = [
          { name: "keywords", content: keywords },
          { property: "og:title", content: title },
          { property: "og:description", content: description },
          { property: "og:url", content: url },
          { property: "twitter:title", content: title },
          { property: "twitter:description", content: description },
          { property: "twitter:url", content: url }
        ];

        this.props.onChange(meta);
      }
    );
  },

  handleChangeKeyworks: function(e) {
    this.setState({ keywords: e.target.value }, function() {
      this.updateMetaData();
    });
  },

  render: function() {
    const value = this.props.value;

    if (!value)
      return h("div", { className: "box" }, [
        h(
          "div",
          {},
          h(
            "button",
            {
              className: "button is-primary",
              onClick: this.updateMetaData
            },
            "Update metadata"
          )
        )
      ]);

    let formattedValue = value.toString().startsWith("List")
      ? Array.from(value).reduce((obj, [first, second]) => {
          return [...obj, { [first[0]]: first[1], [second[0]]: second[1] }];
        }, [])
      : value;

    return h("div", { className: "box" }, [
      formattedValue.map(meta => {
        let label = "";
        const isName = meta.hasOwnProperty("name");

        if (isName) label = meta.name;
        else label = meta.property;

        return h("div", { className: "box field" }, [
          h("label", { className: "label" }, label),
          h(
            "div",
            {
              className: "control"
            },
            h("input", {
              className: "input",
              type: "text",
              disabled: isName && meta.name === "keywords" ? "" : "disabled",
              value: meta.content,
              ...(isName &&
                meta.name === "keywords" && {
                  onInput: this.handleChangeKeyworks
                })
            })
          )
        ]);
      }),
      h(
        "div",
        {},
        h(
          "button",
          {
            className: "button is-primary",
            onClick: this.updateMetaData
          },
          "Update metadata"
        )
      )
    ]);
  }
});

const MetaPreview = createClass({
  render: function() {
    const value = this.props.value;

    if (!value) return h("p", {});

    let formattedValue = value.toString().startsWith("List")
      ? Array.from(value).reduce((obj, [first, second]) => {
          return [...obj, { [first[0]]: first[1], [second[0]]: second[1] }];
        }, [])
      : value;

    return formattedValue.map(meta => {
      let label = "";
      const isKeyworks = meta.hasOwnProperty("name");

      if (isKeyworks) label = meta.name;
      else label = meta.property;

      return h("p", {}, `${label}: ${meta.content}`);
    });
  }
});

CMS.registerWidget("meta", MetaControl, MetaPreview);
