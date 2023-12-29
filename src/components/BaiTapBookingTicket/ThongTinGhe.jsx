import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../../redux/action/BaiTapDatVeAction";

class ThongTinGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon mb-4"></button>
          <span
            className="text-light"
            style={{ fontSize: "23px", marginLeft: "20px" }}>
            Selected Seat
          </span>
          <br />
          <button className="gheDangChon mb-4"></button>
          <span
            className="text-light"
            style={{ fontSize: "23px", marginLeft: "20px" }}>
            Reserved Seat
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: 0 }}></button>
          <span
            className="text-light"
            style={{ fontSize: "23px", marginLeft: "20px" }}>
            Empty Seat
          </span>
        </div>
        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "25px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}>
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinGhe);
