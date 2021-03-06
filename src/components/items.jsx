import React, { useState, useEffect, Component } from 'react';
import Item from './item';

export default function Items(props) {
  const items = [
    {
      link: require('../assets/hol-sweater-a.webp'),
      link2: require('../assets/hol-sweater-b.webp'),
      name: 'Laurie Sweater Top',
      price: '138.00',
    },
    {
      link: require('../assets/slip-a.webp'),
      link2: require('../assets/slip-b.webp'),
      name: 'Eco Lucy Cowl Neck Slip Dress',
      price: '108.00',
    },
  
    {
      link: require('../assets/eco-bodysuit-a.webp'),
      link2: require('../assets/eco-bodysuit-b.webp'),
      name: 'Eco White Bodysuit',
      price: '45.00',
    },
    {
      link: require('../assets/moto-a.webp'),
      link2: require('../assets/moto-b.webp'),
      name: 'Alivia Asymmetrical Ribbed Sweater',
      price: '79.00',
    },
    {
      link: require('../assets/dress-a.webp'),
      link2: require('../assets/dress-b.jpeg'),
      name: 'Raya Shirt Dress',
      price: '158.00',
    },
    {
      link: require('../assets/shoulder-a.webp'),
      link2: require('../assets/shoulder-b.webp'),
      name: 'Flora One-Shoulder Top',
      price: '76.00',
    }, 
    {
      link: require('../assets/alv-sweater-a.jpeg'),
      link2: require('../assets/alv-sweater-b.jpeg'),
      name: 'Alivia Asymmetrical Ribbed Sweater',
      price: '79.00',
    }, 
    {
      link: require('../assets/wrap-dress-a.webp'),
      link2: require('../assets/wrap-dress-b.webp'),
      name: 'Lucia Linen Wrap Dress',
      price: '138.00',
    },
    
    {
      link: require('../assets/floral-maxi-a.webp'),
      link2: require('../assets/floral-maxi-b.webp'),
      name: 'Bali Floral Maxi Dress',
      price: '138.00',
    },
   
    {
      link: require('../assets/romper-a.webp'),
      link2: require('../assets/romper-b.webp'),
      name: 'Lydia Long-Sleeve Romper',
      price: '118.00',
    }, 
    
   
 
 
  ];

  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (props.searchQuery !== undefined) {
      let filtered = [...items]
        .filter((item) => item.name.toLowerCase().includes(props.searchQuery))
        .sort((a, b) => {
          if (props.sortValue === '2') {
            return b.price - a.price;
          } else if (props.sortValue === '3') {
            return a.price - b.price;
          }
        });
      setFilteredItems(filtered);
    } else {
      let filtered = [...items].sort((a, b) => {
        if (props.sortValue === '2') {
          return b.price - a.price;
        } else if (props.sortValue === '3') {
          return a.price - b.price;
        }
      });
      setFilteredItems(filtered);
    }
  }, [props.searchQuery, props.sortValue]);

  return (
    <div>
      <div className='main'>
        {Object.keys(filteredItems).map((i) => (
          <div className='displayGrid' key={i}>
            <Item i={i} filteredItems={filteredItems} items={items}></Item>
            <p className='listItemTitle fontSizeSmaller'>
              {filteredItems[i].name}
            </p>
            <p className='fontSizeSmaller'>{filteredItems[i].price} CAD</p>
          </div>
        ))}
      </div>
    </div>
  );
}
