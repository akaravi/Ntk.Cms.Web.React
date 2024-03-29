import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import {
  Row,
  Card,
  CardBody,
  Nav,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
  Badge,
  CardSubtitle,
  CardTitle
} from "reactstrap";
import Rating from "Components/Rating";
import { SmallLineChart } from "Components/Charts";
import {
  smallChartData1,
  smallChartData2,
  smallChartData3,
  smallChartData4
} from "Constants/chartConfig";

import { LineShadow } from "Components/Charts";
import { areaChartConfig } from "Constants/chartConfig";

import { NavLink } from "react-router-dom";
import CircularProgressbar from "react-circular-progressbar";

import { Colxx } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";

import classnames from "classnames";

export default class DetailsLayout extends Component {
  constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);
    this.state = {
      activeFirstTab: "1"
    };
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeFirstTab: tab
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <h1>کیک شکلاتی</h1>
            <div className="float-sm-left mb-2">
              <UncontrolledDropdown>
                <DropdownToggle
                  caret
                  color="primary"
                  size="lg"
                  outline
                  className="top-right-button top-right-button-single"
                >
                  <IntlMessages id="pages.actions" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>
                  <IntlMessages id="pages.header" />
                  </DropdownItem>
                  <DropdownItem disabled>
                  <IntlMessages id="pages.delete" />
                  </DropdownItem>
                  <DropdownItem>
                  <IntlMessages id="pages.another-action" />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <IntlMessages id="pages.another-action" />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>

            <BreadcrumbItems match={this.props.match} />

            <Nav tabs className="separator-tabs ml-0 mb-5">
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeFirstTab === "1",
                    "nav-link": true
                  })}
                  onClick={() => {
                    this.toggleTab("1");
                  }}
                  to="#"
                >
                  <IntlMessages id="pages.details" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeFirstTab === "2",
                    "nav-link": true
                  })}
                  onClick={() => {
                    this.toggleTab("2");
                  }}
                  to="#"
                >
                  <IntlMessages id="pages.orders" />
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={this.state.activeFirstTab}>
              <TabPane tabId="1">
                <Row>
                  <Colxx xxs="12" lg="4" className="mb-4">
                    <Card className="mb-4">
                      <div className="position-absolute card-top-buttons">
                        <Button outline color={"white"} className="icon-button">
                          <i className="simple-icon-pencil" />
                        </Button>
                      </div>
                      <img
                        src="/assets/img/detail.jpg"
                        alt="Detail"
                        className="card-img-top"
                      />

                      <CardBody>
                        <p className="text-muted text-small mb-2">
                          <IntlMessages id="pages.description" />
                        </p>
                        <p className="mb-3">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. 
                          <br />
                          <br />کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                        </p>

                        <p className="text-muted text-small mb-2">
                        <IntlMessages id="pages.rating" />
                        </p>
                        <div className="mb-3">
                          <Rating total={5} rating={5} interactive={false} />
                        </div>

                        <p className="text-muted text-small mb-2">
                        <IntlMessages id="pages.price" />
                        </p>
                        <p className="mb-3">$8,14</p>
                        <p className="text-muted text-small mb-2">
                          <IntlMessages id="pages.ingredients" />
                        </p>
                        <div className="mb-3">
                          <p className="d-sm-inline-block mb-1">
                            <Badge color="outline-secondary mb-1 mr-1" pill>
                              گل
                            </Badge>
                            <Badge color="outline-secondary mb-1 mr-1" pill>
                              شکلات
                            </Badge>
                            <Badge color="outline-secondary mb-1 mr-1" pill>
                              شیر
                            </Badge>
                            <Badge color="outline-secondary mb-1 mr-1" pill>
                              خمیر کیک
                            </Badge>
                            <Badge color="outline-secondary mb-1 mr-1" pill>
                              روغن
                            </Badge>
                            <Badge color="outline-secondary mb-1 mr-1" pill>
                              تخم مرغ
                            </Badge>
                            <Badge color="outline-secondary mb-1 mr-1" pill>
                              توت فرنگی
                            </Badge>
                          </p>
                        </div>

                        <p className="text-muted text-small mb-2">
                        <IntlMessages id="pages.is-vegan" />
                        </p>
                        <p>خیر</p>
                      </CardBody>
                    </Card>

                    <Card className="mb-4">
                      <CardBody className="d-flex justify-content-between align-items-center">
                        <CardSubtitle className="mb-0">
                          <IntlMessages id="pages.order-status" />
                        </CardSubtitle>
                        <div className="progress-bar-circle">
                          <CircularProgressbar
                            strokeWidth={4}
                            percentage={85}
                            text={"85%"}
                          />
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="mb-4">
                      <CardBody className="d-flex justify-content-between align-items-center">
                        <CardSubtitle className="mb-0">
                          <IntlMessages id="pages.bake-progress" />
                        </CardSubtitle>
                        <div className="progress-bar-circle">
                          <CircularProgressbar
                            strokeWidth={4}
                            percentage={40}
                            text={"40%"}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </Colxx>

                  <Colxx xxs="12" lg="8">
                    <Row>
                      <Colxx xxs="6" className="mb-4">
                        <Card className="dashboard-small-chart">
                          <CardBody>
                            <SmallLineChart {...smallChartData1} />
                          </CardBody>
                        </Card>
                      </Colxx>
                      <Colxx xxs="6" className="mb-4">
                        <Card className="dashboard-small-chart">
                          <CardBody>
                            <SmallLineChart {...smallChartData2} />
                          </CardBody>
                        </Card>
                      </Colxx>
                      <Colxx xxs="6" className="mb-4">
                        <Card className="dashboard-small-chart">
                          <CardBody>
                            <SmallLineChart {...smallChartData3} />
                          </CardBody>
                        </Card>
                      </Colxx>
                      <Colxx xxs="6" className="mb-4">
                        <Card className="dashboard-small-chart">
                          <CardBody>
                            <SmallLineChart {...smallChartData4} />
                          </CardBody>
                        </Card>
                      </Colxx>
                    </Row>

                    <Card className="mb-4">
                      <CardBody>
                        <CardTitle>
                        <IntlMessages id="pages.popularity" />
                        </CardTitle>
                        <div className="chart-container">
                          <LineShadow {...areaChartConfig} />
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="mb-4">
                      <CardBody>
                        <CardTitle>
                        <IntlMessages id="pages.comments" />
                        </CardTitle>
                        <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                          <NavLink to="#">
                            <img
                              alt="Profile"
                              src="/assets/img/profile-pic-l.jpg"
                              className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                            />
                          </NavLink>
                          <div className="pl-3 pr-2">
                            <NavLink to="#">
                              <p className="font-weight-medium mb-0">
                                خیلی خوب.ممنون{" "}
                              </p>
                              <p className="text-muted mb-1 text-small">
                                سارا رحیمی | 17.09.2018 - 04:45
                              </p>
                              <div className="form-group mb-0">
                                <Rating
                                  total={5}
                                  rating={5}
                                  interactive={false}
                                />
                              </div>
                            </NavLink>
                          </div>
                        </div>

                        <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                          <NavLink to="#">
                            <img
                              alt="Profile"
                              src="/assets/img/profile-pic-l-4.jpg"
                              className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                            />
                          </NavLink>
                          <div className="pl-3 pr-2">
                            <NavLink to="#">
                              <p className="font-weight-medium mb-0">
                                خیلی زیبا
                              </p>
                              <p className="text-muted mb-1 text-small">
                                نیما احمدی | 15.08.2018 - 01:18
                              </p>
                              <div className="form-group mb-0">
                                <Rating
                                  total={5}
                                  rating={5}
                                  interactive={false}
                                />
                              </div>
                            </NavLink>
                          </div>
                        </div>

                        <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                          <NavLink to="#">
                            <img
                              alt="Profile"
                              src="/assets/img/profile-pic-l-2.jpg"
                              className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                            />
                          </NavLink>
                          <div className="pl-3 pr-2">
                            <NavLink to="#">
                              <p className="font-weight-medium mb-0">
                                خیلی بدمزه است
                              </p>
                              <p className="text-muted mb-1 text-small">
                                زیبا خرسند | 26.07.2018 - 11:14
                              </p>
                              <div className="form-group mb-0">
                                <Rating
                                  total={5}
                                  rating={2}
                                  interactive={false}
                                />
                              </div>
                            </NavLink>
                          </div>
                        </div>

                        <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                          <NavLink to="#">
                            <img
                              alt="Profile"
                              src="/assets/img/profile-pic-l-3.jpg"
                              className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                            />
                          </NavLink>
                          <div className="pl-3 pr-2">
                            <NavLink to="#">
                              <p className="font-weight-medium mb-0">
                                اصیل و زیبا
                              </p>
                              <p className="text-muted mb-1 text-small">
                                زهرا نظری | 17.06.2018 - 09:20
                              </p>
                              <div className="form-group mb-0">
                                <Rating
                                  total={5}
                                  rating={5}
                                  interactive={false}
                                />
                              </div>
                            </NavLink>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <NavLink to="#">
                            <img
                              alt="Profile"
                              src="/assets/img/profile-pic-l-7.jpg"
                              className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                            />
                          </NavLink>
                          <div className="pl-3 pr-2">
                            <NavLink to="#">
                              <p className="font-weight-medium mb-0">
                                نه من دوست نداشتم
                              </p>
                              <p className="text-muted mb-1 text-small">
                                احمد احدی | 12.04.2018 - 12:45
                              </p>
                              <div className="form-group mb-0">
                                <Rating
                                  total={5}
                                  rating={3}
                                  interactive={false}
                                />
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Colxx>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Colxx>

                    <Card className="d-flex flex-row mb-3">
                      <div className="d-flex flex-grow-1 min-width-zero">
                        <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                          <NavLink
                            to="#"
                            className="list-item-heading mb-1 truncate w-40 w-xs-100"
                          >
                            کیمیا احمدی
                          </NavLink>
                          <p className="mb-1 text-muted text-small w-15 w-xs-100">
                            تهران، ایران
                          </p>
                          <p className="mb-1 text-muted text-small w-15 w-xs-100">
                            02.04.2018
                          </p>

                          <div className="w-15 w-xs-100 text-right">
                            <Badge color="secondary" pill>
                              نگه دارنده
                            </Badge>
                          </div>
                        </CardBody>
                      </div>
                    </Card>

                    <Card className="d-flex flex-row mb-3">
                      <div className="d-flex flex-grow-1 min-width-zero">
                        <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                          <NavLink
                            to="#"
                            className="list-item-heading mb-1 truncate w-40 w-xs-100"
                          >
                            احمد حسینی
                          </NavLink>
                          <p className="mb-1 text-muted text-small w-15 w-xs-100">
                          ایران، مشهد
                          </p>
                          <p className="mb-1 text-muted text-small w-15 w-xs-100">
                          01.04.2018
                          </p>

                          <div className="w-15 w-xs-100 text-right">
                            <Badge color="primary" pill>
                            فرآوری شده
                            </Badge>
                          </div>
                        </CardBody>
                      </div>
                    </Card>

                    <Card className="d-flex flex-row mb-3">
                      <div className="d-flex flex-grow-1 min-width-zero">
                        <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                          <NavLink
                            to="#"
                            className="list-item-heading mb-1 truncate w-40 w-xs-100"
                          >
                          زیبا حسنی
                          </NavLink>
                          <p className="mb-1 text-muted text-small w-15 w-xs-100">
                          ایران، تبریز
                          </p>
                          <p className="mb-1 text-muted text-small w-15 w-xs-100">
                          25.3.1397
                          </p>

                          <div className="w-15 w-xs-100 text-right">
                            <Badge color="primary" pill>
                            فرآوری شده
                            </Badge>
                          </div>
                        </CardBody>
                      </div>
                    </Card>

                    <Card className="d-flex flex-row mb-3">
                      <div className="d-flex flex-grow-1 min-width-zero">
                        <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                          <NavLink
                            to="#"
                            className="list-item-heading mb-1 truncate w-40 w-xs-100"
                          >
                          حسین محمدی
                          </NavLink>
                          <p className="mb-1 text-muted text-small w-15 w-xs-100">
                          ایران، قم
                          </p>
                          <p className="mb-1 text-muted text-small w-15 w-xs-100">
                          20.03.2018
                          </p>

                          <div className="w-15 w-xs-100 text-right">
                            <Badge color="primary" pill>
                            فرآوری شده
                            </Badge>
                          </div>
                        </CardBody>
                      </div>
                    </Card>

                    <Card className="d-flex flex-row mb-4">
                      <div className="d-flex flex-grow-1 min-width-zero">
                        <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                          <NavLink
                            to="#"
                            className="list-item-heading mb-1 truncate w-40 w-xs-100"
                          >
                          نازنین احمدی
                          </NavLink>
                          <p className="mb-1 text-muted text-small w-15 w-xs-100">
                          ایران، تهران
                          </p>
                          <p className="mb-1 text-muted text-small w-15 w-xs-100">
                          17.02.2018
                          </p>

                          <div className="w-15 w-xs-100 text-right">
                            <Badge color="secondary" pill>
                            نگه دارنده
                            </Badge>
                          </div>
                        </CardBody>
                      </div>
                    </Card>

                  </Colxx>
                </Row>
              </TabPane>
            </TabContent>
          </Colxx>
        </Row>
        <Row />
      </Fragment>
    );
  }
}
