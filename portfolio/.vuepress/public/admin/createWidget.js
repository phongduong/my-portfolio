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

const CategoriesControl = createClass({
  getInitialState: function() {
    return {
      title: "",
      description: "",
      keywords: ""
    };
  },

  componentDidMount: function() {
    this.updateMetaData();
  },

  updateMetaData: function() {
    this.setState(
      {
        title: document.querySelector("#title-field-1").value.trim(),
        description: document.querySelector("#description-field-2").value.trim()
      },
      function() {
        const { title, description, keywords } = this.state;
        const hostname = "https://www.phongduong.me";
        const slug = convertToSlug(title);
        const url = `${hostname}/posts/${slug}.html`;
        const data = [
          [["name", "keyword"], ["content", keywords]],
          [["property", "og:title"], ["content", title]],
          [["property", "og:description"], ["content", description]],
          [["property", "og:url"], ["content", url]],
          [["property", "twitter:title"], ["content", title]],
          [["property", "twitter:description"], ["content", description]],
          [["property", "twitter:url"], ["content", url]]
        ];

        this.props.onChange(data);
      }
    );
  },

  handleChangeKeyworks: function(e) {
    this.setState({ keywords: e.target.value.trim() }, function() {
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

    const formattedValue = value.map(val => {
      return val.reduce((pre, cur) => ({ ...pre, [cur[0]]: cur[1] }), {});
    });

    return h("div", { className: "box" }, [
      formattedValue.map(meta => {
        let label = "";
        const isKeyworks = meta.hasOwnProperty("name");

        if (isKeyworks) label = meta.name;
        else label = meta.property;

        return h("div", { className: "box field" }, [
          h("label", { className: "label" }, label),
          h(
            "div",
            { className: "control" },
            h("input", {
              className: "input",
              type: "text",
              disabled: isKeyworks ? "" : "disabled",
              value: meta.content,
              ...(isKeyworks && { onInput: this.handleChangeKeyworks })
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

const CategoriesPreview = createClass({
  render: function() {
    const value = this.props.value;
    
    if (!value) return h("p", {});

    return value
      .map(val => {
        return val.reduce((pre, cur) => ({ ...pre, [cur[0]]: cur[1] }), {});
      })
      .map(meta => {
        let label = "";
        const isKeyworks = meta.hasOwnProperty("name");

        if (isKeyworks) label = meta.name;
        else label = meta.property;

        return h("p", {}, `${label}: ${meta.content}`);
      });
  }
});

CMS.registerWidget("meta", CategoriesControl, CategoriesPreview);
