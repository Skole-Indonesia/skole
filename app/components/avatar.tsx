// 'use client';

// import { Avatar } from 'flowbite-react';

// export default function DefaultAvatar() {
//   return (
//     <div className="flex flex-col justify-center items-center space-y-4 text-center">
//       <Avatar
//         alt="avatar of Jese"
//         img="https://upload.wikimedia.org/wikipedia/commons/6/66/Puan_Maharani%2C_Ketua_DPR_RI.jpg"
//         rounded
//         size={30}
//       />
//       <div>
//         <h2 className='font-semibold'>Lionel Messi</h2>
//         <p className='text-sm text-slate-500'>Dewantara Muda</p>
//       </div>
//     </div>
//   )
// }

'use client'
import { FC } from 'react';
import { Avatar } from 'flowbite-react';

interface DefaultAvatarProps {
  name: string;
  role: string;
  avatarUrl: string;
}

const DefaultAvatar: FC<DefaultAvatarProps> = ({ name, role, avatarUrl }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 text-center">
      <Avatar alt={`avatar of ${name}`} img={avatarUrl} rounded size={50} />
      <div>
        <h2 className="font-semibold">{name}</h2>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
  );
};

export default DefaultAvatar;
