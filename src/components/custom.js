var NavBar = React.createClass({
    render: function(){
      return(
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <NavBrand linkTo={this.props.brand.linkTo} text={this.props.brand.text} />
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <NavMenu links={this.props.links} />
            </div>
          </div>
        </nav>
      );
    }
  });
  
  var NavBrand = React.createClass({
    render: function(){
      return (
        <a className="navbar-brand" href={this.props.linkTo}>{this.props.text}</a>
      ); 
    }
  });
  
  var NavMenu = React.createClass({
    render: function(){
      var links = this.props.links.map(function(link){
        if(link.dropdown) {
          return (
            <NavLinkDropdown links={link.links} text={link.text} active={link.active} />
          );
        }
        else {
          return (
            <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
          );
        }
      });
      return (
        <ul className="nav navbar-nav">
          {links}
        </ul>
      );
    }
  });
  
  var NavLinkDropdown = React.createClass({
    render: function(){
      var active = false;
      var links = this.props.links.map(function(link){
        if(link.active){
          active = true;
        }
        return (
          <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
        );
      });
      return (
        <li className={"dropdown " + (active ? "active" : "")}>
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            {this.props.text}
            <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            {links}
          </ul>
        </li>
      );
    }
  });
  
  var NavLink = React.createClass({
    render: function(){
      return(
        <li className={(this.props.active ? "active" : "")}><a href={this.props.linkTo}>{this.props.text}</a></li>
      );
    }
  });
  
  // set data
  var navbar = {};
  navbar.brand = 
    {linkTo: "#", text: "React Bootstrap Navbar"};
  navbar.links = [
    {linkTo: "#", text: "Link 1"},
    {linkTo: "#", text: "Link 2"},
    {dropdown: true, text: "Dropdown", links: [
      {linkTo: "#", text: "Dropdown Link 1"},
      {linkTo: "#", text: "Dropdown Link 2", active: true}
    ]}
  ];
  
  // render NavBar
  React.render(
    <NavBar {...navbar} />,
    document.getElementById("navbar")
  );


var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };