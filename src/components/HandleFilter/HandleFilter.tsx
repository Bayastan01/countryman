import React, { useState } from 'react';
import { SelectPicker, Button, InputGroup } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
const HandleFilter = () => {
  // State to manage the selected values
  const [propertyType, setPropertyType] = useState('Квартира');
  const [transactionType, setTransactionType] = useState('Купить');
  const [propertyStatus, setPropertyStatus] = useState('Вторичка, новостройки');
  const [rooms, setRooms] = useState(null);

  // Options for dropdowns
  const propertyTypeOptions = [
    { label: 'Квартира', value: 'Квартира' },
    { label: 'Дом', value: 'Дом' },
    { label: 'Коммерческая', value: 'Коммерческая' },
  ];

  const transactionTypeOptions = [
    { label: 'Купить', value: 'Купить' },
    { label: 'Аренда', value: 'Аренда' },
  ];

  const propertyStatusOptions = [
    { label: 'Вторичка', value: 'Вторичка' },
    { label: 'Новостройки', value: 'Новостройки' },
    { label: 'Вторичка, новостройки', value: 'Вторичка, новостройки' },
  ];

  const roomsOptions = [
    { label: '1 комната', value: 1 },
    { label: '2 комнаты', value: 2 },
    { label: '3 комнаты', value: 3 },
    { label: '4+ комнаты', value: 4 },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', maxWidth: '100%' }}>
      <h3>Недвижимость</h3>
      <InputGroup style={{display:'flex',justifyContent:'start', flexWrap: 'wrap',border:'none', outline: 'none',
    }}>
        <SelectPicker
          data={propertyTypeOptions}
          value={propertyType}
          onChange={setPropertyType}
          placeholder="Тип недвижимости"
          style={{ width: 150, margin:2,border:'1px solit black'}}
        />
        <SelectPicker
          data={transactionTypeOptions}
          value={transactionType}
          onChange={setTransactionType}
          placeholder="Тип сделки"
          style={{ width: 150, margin:2}}
        />
        <SelectPicker
          data={propertyStatusOptions}
          value={propertyStatus}
          onChange={setPropertyStatus}
          placeholder="Статус"
          style={{ width: 150, margin:2}}
        />
        <SelectPicker
          data={roomsOptions}
          value={rooms}
          onChange={setRooms}
          placeholder="Комнаты"
          style={{ width: 150, margin:2}}
        />
        
        <Button appearance="primary"  style={{ width: 150, margin:2}} >Показать объявления</Button>
      </InputGroup>
    </div>
  );
};

export default HandleFilter;
