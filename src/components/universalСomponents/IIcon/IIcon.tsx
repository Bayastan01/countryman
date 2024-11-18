import { Stack } from 'rsuite';

import { Icon } from '@rsuite/icons';
interface IIconProps {
    lable?:string;
    name?:string;
    type?:string;
    sizes?:string;
    
}
export const IIcon: React.FC<IIconProps> = (({name,sizes,iconBGColor})=>{
    return(
        <>
          <Stack direction="row" spacing={10}>
           <Icon as={name} style={{ fontSize:sizes ,cursor:'pointer',color:iconBGColor }}/>
          </Stack>
        </>
    )
})