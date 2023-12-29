import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinGhe from "./ThongTinGhe";
import danhSachGheData from "../../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: 'url("./img/bookingTicket/bgmovie.jpg")',
          backgroundSize: "100%",
        }}>
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div
                  className="display-4 text-white"
                  style={{
                    fontWeight: "bold",
                    transform: "translateX(20px)",
                    marginTop: "50px",
                  }}>
                  MOVIE SEAT SELECTION
                </div>
                <div
                  className="mt-3 text-light text-center"
                  style={{
                    fontSize: "25px",
                    transform: "translateX(10px)",
                    marginTop: "50px",
                  }}>
                  Screen
                </div>
                <div className="mt-1 d-flex flex-column justify-content-center ">
                  <div className="screen" style={{
                    marginLeft:"120px"
                  }}></div>
                  {this.renderHangGhe()}
                </div>
              </div>
              <div className="col-4">
                <ThongTinGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
