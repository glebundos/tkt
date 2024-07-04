import React from "react";
import styled from "styled-components";
import "./App.css";
import photo1 from "./images/ph1.jpg";
import photo2 from "./images/ph2.jpg";
import photo3 from "./images/ph3.jpg";
import photo4 from "./images/ph4.jpg";
import photo5 from "./images/ph5.jpg";
import photo6 from "./images/ph6.jpg";
import photo7 from "./images/ph7.jpg";
import photo8 from "./images/ph8.jpg";
import photo9 from "./images/ph9.jpg";
import photo10 from "./images/ph10.jpg";
import photo11 from "./images/ph11.jpg";
import photo12 from "./images/ph12.jpg";
import photo13 from "./images/ph13.jpg";
import photo14 from "./images/ph14.jpg";
import photo15 from "./images/ph15.jpg";

const photos = [
  {
    src: photo10,
    title:
      "Это вот первая фотка которую ты мне скинула ну если не считать когда ты сапоги купила и как ты на сцене стоишь типо того",
    small: true,
  },
  {
    src: photo11,
    title: "Эта такая классная помню тоже давно её зимняя весёлая кайфовая",
  },
  { src: photo12, title: "Вот эта мне всегда нравилась очень милая" },
  {
    src: photo6,
    title:
      "Если примерно по хронологии идти то дальше вот эта, ну тут ты такая что ты что ты",
  },
  { src: photo13, title: "Ну это просто гениальная фотокарточка, классика" },
  {
    src: photo5,
    title:
      "Просто пиздец, других слов нету, самая охуевшая фотка топ 1 я считаю, когда я на нее смотрю у меня сразу в голове начинает играть кишлак и апфс",
  },
  {
    src: photo14,
    title:
      "А эту я даже не видел, а вот пересмотрел актуальные и теперь увидел",
  },
  {
    src: photo9,
    title:
      "Вот ты мне тогда скинула зимой несколько фоток и эта мне больше всего понравилась не знаю почему, ты тут как-то счастливо выглядишь",
    small: true,
  },
  { src: photo4, title: "Прикалдесная такая сигма фейс" },
  { src: photo3, title: "СЮДАААААА" },
  { src: photo8, title: "Это база" },
  { src: photo7, title: "Вся эта фотосессия база жесткая" },

  {
    src: photo15,
    title: "Ну такая потерянная трохи но фотка все равно крутая",
  },
  { src: photo2, title: "Красивая Кристинка получила диплом 😊" },
  {
    src: photo1,
    title: "Красивая Кристинка получила диплом и цветы  😊😊😊",
  },
];

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3e5f5;
`;

const Title = styled.h1`
  color: #6a1b9a;
  margin-bottom: 10px;
  font-size: 24px;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 40px;
  }
`;

const Text = styled.p`
  color: #6a1b9a;
  margin-bottom: 20px;
  font-size: 18px;
  text-align: center;

  @media (min-width: 600px) {
    margin-bottom: 40px;
    font-size: 16px;
  }
`;

const PhotoAlbum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 600px) {
    gap: 40px;
  }
`;

const PhotoCard = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
`;

const Photo = styled.img`
  width: 100%;
`;

const PhotoTitle = styled.h2`
  font-size: 1rem;
  padding: 10px;
  color: #8e24aa;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 1.2rem;
  }
`;

function App() {
  return (
    <AppContainer>
      <Title>Мой альбом фотокарточек Кристины Тиграновны</Title>
      <Text>
        Вашему вниманию представляется список фотокарточек Кристиночки Скрипки
        Торосян с некоторыми моими заметками
      </Text>
      <PhotoAlbum>
        {photos.map((photo, index) => (
          <PhotoCard key={index}>
            <Photo src={photo.src} alt={photo.title} small={photo.small} />
            <PhotoTitle>{photo.title}</PhotoTitle>
          </PhotoCard>
        ))}
      </PhotoAlbum>
      <Title>Итого, победитель:</Title>
      <PhotoCard>
        <Photo
          src={photos[5].src}
          alt={photos[5].title}
          small={photos[5].small}
        />
        <PhotoTitle>
          {
            "Это вот та фотокарточка которая легла в основу того самого идеального образа который я себе всегда представлял, я слушал ты меня не любишь, я никогда не нюхал и конечно же апфс - опиаты и вот эта фотография она такая красивая, в этих каких-то фиолетовых 2к17 тонах, сирень какая-то или что это за хуйня тоже красивая, фотка веет добрым вайбом, в эту фотографию просто невозможно не влюбиться Кристина, я не виноват ни капли"
          }
        </PhotoTitle>
      </PhotoCard>
    </AppContainer>
  );
}

export default App;
