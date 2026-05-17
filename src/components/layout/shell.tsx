import ContentTitle from "../content-title";

export default function Shell({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div>
      <main>
        {title && <ContentTitle title={title} />}
        {children}
      </main>
    </div>
  );
}
