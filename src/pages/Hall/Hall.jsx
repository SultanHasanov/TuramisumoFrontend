import styles from '../../scss/pages/Hall.module.scss'
import React, {useEffect, useState} from 'react';
import Header from '../../Components/Header/Header';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getTable, patchTableBooking} from '../../features/tableSlice';
import { changeTableBooking } from '../../features/hallSlice';

const Hall = () => {
    const [changeTable, setChangeTable] = useState(false);
    const {tables} = useSelector((state) => state.table);
    const dispatch = useDispatch();
    const handleTableBooking = (id) => {
        console.log('{ booking }');
        dispatch(patchTableBooking(id));
        setChangeTable(!changeTable);
    }
    useEffect(() => {
      dispatch(getTable());
    }, [dispatch, changeTable]);
    return (
      <div className={styles.main_hall}>
        <Header />
        <div className={styles.hall_body}></div>
        <div className={styles.hall_btn}>
          {tables?.map((el) => {
            return (
              <button
                onClick={() => handleTableBooking(el._id)}
                className={el.booking ? styles.color_grey : styles.color_red}
              >
                {el.number}
              </button>
            );
          })}
        </div>
      </div>
    );
};

export default Hall;