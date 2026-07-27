import { notFound } from "next/navigation";
import { findNotice, notices } from "../../data/notices";

export const dynamic = "force-static";

export function generateStaticParams() {
  return notices.map((notice) => ({ slug: notice.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const notice = findNotice(slug);

  if (!notice) return {};

  return {
    title: `${notice.title} | LevelDev Inc.`,
    description: notice.description,
  };
}

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const notice = findNotice(slug);

  if (!notice) notFound();

  return (
    <main className="notice-page">
      <header className="notice-page-header">
        <a href="/" aria-label="LevelDev 홈">
          <img src="/logo.svg" alt="LevelDev" width="132" height="40" />
        </a>
        <a href="/#news">← 공지사항으로 돌아가기</a>
      </header>

      <article className="notice-article">
        <div className="notice-article-hero">
          <p className="eyebrow">LEVELDEV NEWS</p>
          <div className="notice-article-meta">
            <span>{notice.category}</span>
            <time>{notice.date}</time>
          </div>
          <h1>{notice.title}</h1>
          <p>{notice.introduction}</p>
        </div>

        <div className="notice-article-body">
          {notice.sections.map((section, index) => (
            <section key={section.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                {section.items ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        <div className="notice-article-cta">
          <div>
            <span>CONTACT</span>
            <h2>프로젝트와 협업에 대해 이야기해 주세요.</h2>
          </div>
          <a href="mailto:contact@leveldev.net">
            contact@leveldev.net <span>↗</span>
          </a>
        </div>
      </article>
    </main>
  );
}
