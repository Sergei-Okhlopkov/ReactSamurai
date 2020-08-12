import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.mainImg}
          alt="Fon"
          src="https://i.pinimg.com/originals/61/e7/8b/61e78b08a8dd18779132812218a9f2a8.jpg"
        />
      </div>
      <div className={s.profileInfo}>
        <div>
          <img className={s.ava} src="https://sun9-2.userapi.com/c854420/v854420628/9c617/RCESXJ6IJrE.jpg" alt="ava" />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius error voluptatum debitis corrupti
          inventore, iure voluptates ex, atque a, accusantium ipsa. Unde explicabo odio sequi quis amet eaque odit
          exercitationem saepe culpa nobis deleniti cumque rem aspernatur, cupiditate eum similique reprehenderit beatae
          quos dolorum? Sed aliquam architecto repellendus nam fugit natus incidunt cupiditate deserunt voluptas! Est,
          ipsam deserunt? Temporibus sed in sequi placeat neque, alias tempore voluptate maxime commodi corrupti eos,
          earum facere numquam reprehenderit aliquid iure saepe molestiae minima exercitationem ex pariatur? Labore
          architecto obcaecati non iste officia mollitia officiis doloribus doloremque repellat tenetur, eum explicabo,
          autem quo.
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
