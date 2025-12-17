import React, { useCallback } from 'react'
import { Stack } from 'rsuite';

import { Icon } from '@rsuite/icons';
interface IIconProps {
    lable?:string;
    name?:string | undefined;
    type?:string;
    sizes?:string;
    iconBGColor?:string;
    callback?:boolean;
}
export const IIcon: React.FC<IIconProps> = (({name,sizes,iconBGColor,callback})=>{
    return(
        <>
          <Stack direction="row" spacing={10}>
           <Icon
           as={name}
           onClick={callback} 
           style={{ fontSize:sizes ,cursor:'pointer',color:iconBGColor }}
           />
          </Stack>
        </>
    )
})