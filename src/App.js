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
    src: photo1,
    title: "Красивая Кристинка получила диплом и цветы  😊😊😊",
  },
  { src: photo2, title: "Красивая Кристинка получила диплом 😊" },
  { src: photo3, title: "BASE" },
  { src: photo4, title: "Прикалдесная такая сигма фейс" },
  {
    src: photo5,
    title:
      "Просто пиздец, других слов нету, самая охуевшая фотка топ 1 я считаю, когда я на нее смотрю у меня сразу в голове начинает играть кишлак и апфс",
  },
  {
    src: photo6,
    title: "Ну тут такая что ты что ты",
  },
  { src: photo7, title: "Вся эта фотосессия база" },
  { src: photo8, title: "Это база" },
  {
    src: photo9,
    title:
      "Вот ты мне тогда скинула зимой несколько фоток и эта мне больше всего понравилась не знаю почему, ты тут как-то счастливо выглядишь",
    small: true,
  },
  {
    src: photo10,
    title:
      "Это вот первая фотка которую ты мне скинула ну если не считать когда ты сапоги купила и как ты на сцене стоишь типо того",
    small: true,
  },
  { src: photo11, title: "Эта тоже милая такая прикольная" },
  { src: photo12, title: "Вот эта мне всегда нравилась такая милая" },
  { src: photo13, title: "Гениальная фотокарточка" },
  {
    src: photo14,
    title:
      "А эту я даже не видел, а вот пересмотрел актуальные и теперь увидел",
  },
  { src: photo15, title: "Photo 15" },
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

  @media (min-width: 600px) {
    font-size: 40px;
  }
`;

const Text = styled.p`
  color: #6a1b9a;
  margin-bottom: 20px;
  font-size: 14px;
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
      <Title>Title</Title>
      <Text>(subtitle)</Text>
      <PhotoAlbum>
        {photos.map((photo, index) => (
          <PhotoCard key={index}>
            <Photo src={photo.src} alt={photo.title} small={photo.small} />
            <PhotoTitle>{photo.title}</PhotoTitle>
          </PhotoCard>
        ))}
      </PhotoAlbum>
    </AppContainer>
  );
}

export default App;
