import React, { useMemo, useState, Fragment, useContext } from "react";

import "./Order.css"
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import vi from 'date-fns/locale/vi';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { UserContext } from '../contexts/UserContext';
import { AiOutlineSearch } from "react-icons/ai";


import Moment from 'moment';
const urlSearchOrder = 'http://192.168.1.7:8082/api/Order/GetListOrder/YALY1';
registerLocale('vi', vi)

const Order = () => {
  const { state, dispatch } = useContext(UserContext);
  const [site, setSite] = useState(state.site)
  const [user, setUser] = useState(state.user)
  const [data, setData] = useState([]);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setTotDate] = useState(new Date());


  const handleClick = (id) => {
    console.log(id);
  };
  const search = () => {
    fetchSearchOrder()
  }
  const fetchSearchOrder = async () => {
    try {
      let dt = {
        "REC_SHOP": site.recShop,
        "REC_SELLER": user.recSeller,
        "TICKET_CODE": 0,
        "Merarial": 2,
        "FromDate": fromDate.toJSON(),
        "ToDate": toDate.toJSON()
      };
      const response = await fetch(urlSearchOrder, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          //"Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(dt)
      });
      let json = await response.json();
      if (response.status == 200) {
        setData(json)
      }
    } catch (e) {

    }
  }
  return (
    <View style={styles.orderContainer}>
      {/* <div className="app-container"> */}
      <View style={[{ flexDirection: 'row' }]} >
        <Text style={{ paddingTop: 5 }}>Từ ngày </Text>
        <View>
          <DatePicker
            className='date-picker-container'
            selected={fromDate}
            locale="vi"
            dateFormat="dd/MM/yyyy"
            onChange={date => setFromDate(date)} />
        </View>
        <Text style={{ paddingTop: 5 }}>Đến ngày </Text>
        <View>
          <DatePicker
            className='date-picker-container'
            selected={toDate}
            locale="vi"
            dateFormat="dd/MM/yyyy"
            onChange={date => setTotDate(date)} />
        </View>
        <TouchableOpacity style={styles.button} onPress={search}>
          <Text>Tìm</Text  >
        </TouchableOpacity>
      </View>
      <table>
        <thead>
          <tr>
            <th>Mã</th>
            <th>Tên khách</th>
            <th>Sản phẩm </th>
            <th>Ngày hoàn thành </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((contact, index) => (
            <tr key={contact.tickeT_CODE}>
              <td >{contact.tickeT_CODE}</td>
              <td >{contact.customeR_NAME}</td>
              <td >{contact.producT_NAME}</td>
              <td >{Moment(contact.finisH_DATE).format('DD/MM/YYYY')}</td>
              <td>
                <button
                  onClick={() => handleClick(index)}
                // type="button"
                >
                  Edit
                </button>
                <button type="button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </View>

  );
};
export default Order;
const styles = StyleSheet.create({
  orderContainer: {
    padding:5,
    flex:1,
    alignItems: 'center',
  },

  button: {
    //borderRadius: 3,
    borderWidth: 1,
    borderColor: '#888',
    backgroundColor: '#eee',
    height: 20,
    width: 60,
    textAlign: 'center',
    marginTop: 5
  },

});
