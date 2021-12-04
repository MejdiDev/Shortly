class Navbar extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "header"
    }, /*#__PURE__*/React.createElement("div", {
      id: "navbar"
    }, /*#__PURE__*/React.createElement("div", {
      id: "sections"
    }, /*#__PURE__*/React.createElement("img", {
      src: "./src/img/logo.svg",
      alt: "Logo"
    }), /*#__PURE__*/React.createElement("p", null, "Features"), /*#__PURE__*/React.createElement("p", null, "Pricing"), /*#__PURE__*/React.createElement("p", null, "Resources")), /*#__PURE__*/React.createElement("div", {
      id: "cta"
    }, /*#__PURE__*/React.createElement("p", null, "Login"), /*#__PURE__*/React.createElement("p", null, "Sign Up")), /*#__PURE__*/React.createElement("i", {
      class: "fas fa-bars"
    })));
  }

}

class General extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "general"
    }, /*#__PURE__*/React.createElement("div", {
      id: "container"
    }, /*#__PURE__*/React.createElement("div", {
      id: "title"
    }, /*#__PURE__*/React.createElement("h1", null, "More than just shorter links"), /*#__PURE__*/React.createElement("p", null, "Build your brand\u2019s recognition and get detailed insights on how your links are performing."), /*#__PURE__*/React.createElement("button", null, "Get Started")), /*#__PURE__*/React.createElement("img", {
      src: "./src/img/illustration-working.svg",
      alt: "working"
    })));
  }

}

class StatBox extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "statbox"
    }, /*#__PURE__*/React.createElement("div", {
      id: "icon"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: this.props.src
    }))), /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("p", null, this.props.para));
  }

}

class Stats extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "stats"
    }, /*#__PURE__*/React.createElement("div", {
      id: "form"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Shorten a link here..."
    }), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Shorten It!"
    })), /*#__PURE__*/React.createElement("h1", null, "Advanced Statistics"), /*#__PURE__*/React.createElement("p", null, "Track how your links are performing across the web with our advanced statistics dashboard."), /*#__PURE__*/React.createElement("div", {
      id: "container"
    }, /*#__PURE__*/React.createElement(StatBox, {
      title: "Brand Recognition",
      para: "Boost your brand recognition with each click. Generic links don\u2019t mean a thing. Branded links help instil confidence in your content.",
      src: "./src/img/icon-brand-recognition.svg"
    }), /*#__PURE__*/React.createElement(StatBox, {
      title: "Detailed Records",
      para: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      src: "./src/img/icon-detailed-records.svg"
    }), /*#__PURE__*/React.createElement(StatBox, {
      title: "Fully Customizable",
      para: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      src: "./src/img/icon-fully-customizable.svg"
    })));
  }

}

class Boost extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "Boost"
    }, /*#__PURE__*/React.createElement("h1", null, "Boost your links today"), /*#__PURE__*/React.createElement("button", null, "Get Started"));
  }

}

class Foot extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "foot"
    }, /*#__PURE__*/React.createElement("h1", null, this.props.title), this.props.links.map(link => /*#__PURE__*/React.createElement("p", null, link)));
  }

}

const feet = [["Link Shortening", "Branded Links", "Analytics"], ["Blog", "Developers", "Support"], ["About", "Our Team", "Careers", "Contact"]];

class Footer extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "ctf"
    }, /*#__PURE__*/React.createElement("div", {
      id: "footer"
    }, /*#__PURE__*/React.createElement("img", {
      src: "./src/img/logo.svg",
      alt: "Logo-White",
      id: "logo"
    }), /*#__PURE__*/React.createElement(Foot, {
      title: "Features",
      links: feet[0]
    }), /*#__PURE__*/React.createElement(Foot, {
      title: "Resources",
      links: feet[1]
    }), /*#__PURE__*/React.createElement(Foot, {
      title: "Company",
      links: feet[2]
    }), /*#__PURE__*/React.createElement("div", {
      id: "socials"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, /*#__PURE__*/React.createElement("img", {
      src: "./src/img/icon-facebook.svg",
      alt: "facebook-logo"
    })), /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, /*#__PURE__*/React.createElement("img", {
      src: "./src/img/icon-twitter.svg",
      alt: "twitter-logo"
    })), /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, /*#__PURE__*/React.createElement("img", {
      src: "./src/img/icon-pinterest.svg",
      alt: "pinterst-logo"
    })), /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, /*#__PURE__*/React.createElement("img", {
      src: "./src/img/icon-instagram.svg",
      alt: "instagram-logo"
    })))));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("div", {
  class: "spacer"
}), /*#__PURE__*/React.createElement(General, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Boost, null), /*#__PURE__*/React.createElement(Footer, null)), document.getElementById('root'));
let last = false;
setInterval(function () {
  if (window.scrollY > 100 && !last) {
    $('#header').hide();
    $("#header").toggleClass('active');
    $('.spacer').css("height", "150px");
    $('#header').css("position", "fixed");
    $('#header').css("top", "-150px");
    $('#header').slideDown("50ms");
    $('#header').css("top", "0px");
    last = true;
  }

  if (window.scrollY < 100 && last) {
    $("#header").toggleClass('active');
    $('#header').css("position", "relative");
    $('.spacer').css("height", "0px");
    last = false;
  }
}, 1);
