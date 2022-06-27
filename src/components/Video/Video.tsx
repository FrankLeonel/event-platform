import "@vime/core/themes/default.css";
import {
  DefaultUi,
  Player,
  Skeleton as SkeletonPlay,
  Ui,
  Youtube,
} from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router-dom";
import { useGetLessonBySlugQuery } from "../../graphql/generated";
import Button from "../Button";

const Video = () => {
  const { slug: lessonSlug } = useParams<{ slug: string }>();

  const { data } = useGetLessonBySlugQuery({
    variables: { slug: lessonSlug },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <p>
            <Skeleton count={4} />
          </p>
        </SkeletonTheme>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="w-full h-full max-w-[480px] md:max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
            <Ui>
              <SkeletonPlay effect="sheen" />
            </Ui>
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[360px] md:max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt="avatar"
                />

                <div className="leading-relaxed">
                  <strong className="text-lg md:text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="font-normal text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <Button url="#" variant="primary">
              <DiscordLogo size={24} />
              Comunidade no Discord
            </Button>

            <Button url="#" variant="secondary">
              <Lightning size={24} />
              Acesse o desafio
            </Button>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-1 md:grid-cols-2">
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-4 md:gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="flex flex-col gap-2 py-6 leading-relaxed">
              <strong className="text-lg md:text-2xl">
                Material Complementar
              </strong>
              <span className="text-xs md:text-sm text-gray-200">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </span>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} className="text-blue-500" />
            </div>
          </a>

          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-4 md:gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="flex flex-col gap-2 py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <span className="text-sm text-gray-200">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </span>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} className="text-blue-500" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;
