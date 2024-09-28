/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import block from 'bem-cn';
import { Input as RInput, InputGroup } from 'rsuite';
import { selectLocaleDict } from '../../features/locale/selectors';
import SearchIcon from '@rsuite/icons/Search';
import CloseIcon from '@rsuite/icons/Close';
// import { ReactComponent as EyeIcon } from '../../shared/image/back.svg';
// import { ReactComponent as EyeSlashIcon } from '../../shared/image/back.svg';

import './Input.scss';

interface IInputProps {
  label?: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: any, val: string) => void;
  name?: string;
  isRequired?: boolean;
  type?: string;
  errors?: any;
  [x: string]: any;
}

export const Input: React.FC<IInputProps> = ({
  label,
  placeholder,
  value,
  type = 'text',
  onChange,
  isRequired = false,
  errors,
  ...props
}) => {
  const b = block('input');
  const errorLocale = useSelector(selectLocaleDict, shallowEqual).errorStatusMessage;

  const onChangeCallback = useCallback(
    (val: string, e: any) => {
      onChange(e, val);
    },
    [onChange],
  );

  const currErr = useMemo(() => {
    const { name } = props;
    return errors?.listOfErrors.find((err: { field: string | undefined; }) => err.field === name);
  }, [errors, props.name, errorLocale]);

  return (
    <div className={b()}>
      <RInput
       type={type}
        value={value}
        onChange={onChangeCallback}
        placeholder={placeholder}
        required={isRequired}
        className={b()}
        {...props}

      />
      {/* <div className={b('error')}>{errorLocale[currErr?.code]}&nbsp;</div> */}
    </div>
  );
};

export const InputPassword: React.FC<IInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  isRequired = false,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  return (
    <div className="input__password">
      <Input
        onChange={onChange}
        type={visible ? 'text' : 'password'}
        value={value}
        isRequired={isRequired}
        {...props}
      />
      <button onClick={handleChange} className="input__password-toggle">
        {/* {visible ? <EyeIcon /> : <EyeSlashIcon />} */}
      </button>
    </div>
  );
};

// export const InputSearch: React.FC<IInputProps> = ({
//   label,
//   placeholder,
//   value,
//   type = 'text',
//   onChange,
//   isRequired = false,
//   errors,
//   ...props
// }) => {
//   const b = block('inputSearch');
//   const onChangeCallback = useCallback(
//     (val: string, e: any) => {
//       onChange(e, val);
//     },
//     [onChange],
//   );
//   return (
//     <div className={b()}>
//       <InputGroup.Button >
//         <SearchIcon />
//       </InputGroup.Button>
//       <Input
//         type={type}
//         value={value}
//         onChange={onChangeCallback}
//         placeholder={placeholder}
//         required={isRequired}
//         className={b('input')}
//         {...props}
//       />
//     </div>
//   );
// };

export const InputSearch: React.FC<IInputProps> = ({
  label,
  placeholder,
  value,
  type = 'text',
  onChange,
  isRequired = false,
  errors,
  ...props
}) => {
  const b = block('inputSearch');
  const errorLocale = useSelector(selectLocaleDict, shallowEqual).errorStatusMessage;
  const [x,setX]=useState(false)
  const onChangeCallback = useCallback(
    (val: string, e: any) => {
    console.log(val)

      onChange(e, val);
      if(val.length > 0 ){
        setX(true)
      }else{
        setX(false)
      }
    },
    [onChange],
  );

  const currErr = useMemo(() => {
    const { name } = props;
    return errors?.listOfErrors.find((err: { field: string | undefined; }) => err.field === name);
  }, [errors, props.name, errorLocale]);

  return (
    <div className={b().toString()}>
       <InputGroup.Button >
        <SearchIcon />
      </InputGroup.Button>
      <RInput
       type={type}
        value={value}
        onChange={onChangeCallback}
        placeholder={placeholder}
        required={isRequired}
        className={b('input').toString()}
        {...props}
      />
      {/* <div className={b('error')}>{errorLocale[currErr?.code]}&nbsp;</div> */}
      {
        x ? (
            <InputGroup.Button  >
        <CloseIcon />
      </InputGroup.Button>
        ) : null
      }
    </div>
  );
};