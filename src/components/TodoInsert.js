import React, { useState, useCallback } from 'react'
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {

    const [value, setValue] = useState('');  /** 할일 Text */

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);
    /** onChange event 
     *  useCallback을 사용하지 않으면, 컴포넌트가 리 랜더링 될때마다 함수가 새로 생성됨.
     *  이를 막아 성능 최적화
     */

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');  /** 추가하면 입력되있는 text 지우기 */

        e.preventDefault(); /** 페이지 이동 없애기 */
    }, [onInsert, value])

    /** onSubmit 최적화
     *  마찬가지
     */

    return (
        <div>
            <form className="TodoInsert" onSubmit={onSubmit}>
                <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
                <button type="submit" >
                    <MdAdd />
                </button>
            </form>
        </div>
    )
}

export default TodoInsert
