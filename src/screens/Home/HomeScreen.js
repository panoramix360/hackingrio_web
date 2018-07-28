import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { styles } from "./styles";

class HomeScreen extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <nav
                    className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink"
                    id="mainNav"
                >
                    <div className="container">
                        <a
                            className="navbar-brand js-scroll-trigger"
                            href="#page-top"
                        >
                            Go Work
                        </a>
                        <button
                            className="navbar-toggler navbar-toggler-right"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarResponsive"
                        >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <form className="form-inline">
                                        <div className="form-group mb-2">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="login"
                                                placeholder="Usuário"
                                            />
                                        </div>
                                        <div className="form-group mx-sm-3 mb-2">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Senha"
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <a
                                                className="nav-link js-scroll-trigger"
                                                href="#about"
                                            >
                                                Entrar
                                            </a>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <header className="masthead text-center text-white d-flex">
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <h1 className="text-uppercase">
                                    <strong>
                                        Seu transporte privado empresarial
                                    </strong>
                                </h1>
                                <hr />
                            </div>
                            <div className="col-lg-8 mx-auto">
                                <p className="text-faded mb-5">
                                    Go Work vai ajudar seus funcionários a
                                    sairem com segurança e no horário do seu
                                    ambiente empresarial
                                </p>
                                <a
                                    className="btn btn-primary btn-xl js-scroll-trigger"
                                    href="#about"
                                >
                                    Faça seu orçamento
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="bg-primary" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <h2 className="section-heading text-white">
                                    Cadastre a sua empresa
                                </h2>
                                <hr className="light my-4" />
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                        />
                                        <small
                                            id="emailHelp"
                                            class="form-text text-muted"
                                        >
                                            We'll never share your email with
                                            anyone else.
                                        </small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div class="form-group form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                            id="exampleCheck1"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="exampleCheck1"
                                        >
                                            Check me out
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </form>
                                <a
                                    className="btn btn-light btn-xl js-scroll-trigger"
                                    href="#services"
                                >
                                    Enviar
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">
                                    At Your Service
                                </h2>
                                <hr className="my-4" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box mt-5 mx-auto">
                                    <i className="fa fa-4x fa-diamond text-primary mb-3 sr-icons" />
                                    <h3 className="mb-3">Sturdy Templates</h3>
                                    <p className="text-muted mb-0">
                                        Our templates are updated regularly so
                                        they don't break.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box mt-5 mx-auto">
                                    <i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons" />
                                    <h3 className="mb-3">Ready to Ship</h3>
                                    <p className="text-muted mb-0">
                                        You can use this theme as is, or you can
                                        make changes!
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box mt-5 mx-auto">
                                    <i className="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons" />
                                    <h3 className="mb-3">Up to Date</h3>
                                    <p className="text-muted mb-0">
                                        We update dependencies to keep things
                                        fresh.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box mt-5 mx-auto">
                                    <i className="fa fa-4x fa-heart text-primary mb-3 sr-icons" />
                                    <h3 className="mb-3">Made with Love</h3>
                                    <p className="text-muted mb-0">
                                        You have to make your websites with love
                                        these days!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-0" id="portfolio">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters popup-gallery">
                            <div className="col-lg-4 col-sm-6">
                                <a
                                    className="portfolio-box"
                                    href="assets/portfolio/fullsize/1.jpg"
                                >
                                    <img
                                        className="img-fluid"
                                        src="assets/portfolio/thumbnails/1.jpg"
                                        alt=""
                                    />
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                Category
                                            </div>
                                            <div className="project-name">
                                                Project Name
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a
                                    className="portfolio-box"
                                    href="assets/portfolio/fullsize/2.jpg"
                                >
                                    <img
                                        className="img-fluid"
                                        src="assets/portfolio/thumbnails/2.jpg"
                                        alt=""
                                    />
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                Category
                                            </div>
                                            <div className="project-name">
                                                Project Name
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a
                                    className="portfolio-box"
                                    href="assets/portfolio/fullsize/3.jpg"
                                >
                                    <img
                                        className="img-fluid"
                                        src="assets/portfolio/thumbnails/3.jpg"
                                        alt=""
                                    />
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                Category
                                            </div>
                                            <div className="project-name">
                                                Project Name
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a
                                    className="portfolio-box"
                                    href="assets/portfolio/fullsize/4.jpg"
                                >
                                    <img
                                        className="img-fluid"
                                        src="assets/portfolio/thumbnails/4.jpg"
                                        alt=""
                                    />
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                Category
                                            </div>
                                            <div className="project-name">
                                                Project Name
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a
                                    className="portfolio-box"
                                    href="assets/portfolio/fullsize/5.jpg"
                                >
                                    <img
                                        className="img-fluid"
                                        src="assets/portfolio/thumbnails/5.jpg"
                                        alt=""
                                    />
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                Category
                                            </div>
                                            <div className="project-name">
                                                Project Name
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a
                                    className="portfolio-box"
                                    href="assets/portfolio/fullsize/6.jpg"
                                >
                                    <img
                                        className="img-fluid"
                                        src="assets/portfolio/thumbnails/6.jpg"
                                        alt=""
                                    />
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                Category
                                            </div>
                                            <div className="project-name">
                                                Project Name
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <h2 className="section-heading">
                                    Let's Get In Touch!
                                </h2>
                                <hr className="my-4" />
                                <p className="mb-5">
                                    Ready to start your next project with us?
                                    That's great! Give us a call or send us an
                                    email and we will get back to you as soon as
                                    possible!
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 ml-auto text-center">
                                <i className="fa fa-phone fa-3x mb-3 sr-contact" />
                                <p>123-456-6789</p>
                            </div>
                            <div className="col-lg-4 mr-auto text-center">
                                <i className="fa fa-envelope-o fa-3x mb-3 sr-contact" />
                                <p>
                                    <a href="mailto:your-email@your-domain.com">
                                        feedback@startbootstrap.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default withStyles(styles)(withRouter(HomeScreen));
