import styled from "styled-components";

const FirstVisual = () => {
  return (
    <article>
      <div>
        <strong>TV로 즐기세요.</strong>
        <p>
          스마트 TV, PlayStation, Xbox, Chromecast,
          <br />
          Apple TV, 블루레이 플레이어 등 다양한
          <br />
          디바이스에서 시청하세요.
        </p>
      </div>
      <div>
        <video>
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            type="video/mp4"
          />
        </video>
      </div>
    </article>
  );
};

export default FirstVisual;
