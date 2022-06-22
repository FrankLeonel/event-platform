import Lesson from "../Lesson";

const Sidebar = () => {
  return (
    <aside className="w-[348px] p-6 bg-gray-700 border-l border-gray-600">
      <span className="font-bold text-2xl p-6 mb-6 border-b border-gray-500 block">
        Cronogramas de aulas
      </span>

      <div className="flex flex-col gap-8">
        <Lesson
          title="Abertura do evento Ignite Lab"
          slug="abertura-do-evento-ignite-lab"
          availableAt={new Date()}
          type="live"
        />

        <Lesson
          title="Abertura do evento Ignite Lab"
          slug="abertura-do-evento-ignite-lab"
          availableAt={new Date()}
          type="class"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
