import { useState, useTransition } from "react";

function PostItem({ index }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {}
  return <li className="item">Post #{index + 1}</li>;
}

function PostsTab() {
  let items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<PostItem key={i} index={i} />);
  }
  return <ul>{items}</ul>;
}

function ContactTab() {
  return (
    <>
      <p>You can find me online here:</p>
      <ul>
        <li>admin@mysite.com</li>
        <li>+123456789</li>
      </ul>
    </>
  );
}
function AboutTab() {
  return <p>Welcome to my profile!</p>;
}
function TabButton({ action, children, isActive }) {
  const [isPending, startTransition] = useTransition();

  if (isActive) {
    return <b>{children}</b>;
  }
  if (isPending) {
    return <b className="pending">{children}</b>;
  }
  return (
    <button
      onClick={async () => {
        startTransition(async () => {
          await action();
        });
      }}
    >
      {children}
    </button>
  );
}

function TabContainer() {
  const [tab, setTab] = useState("about");
  return (
    <div>
      <TabButton isActive={tab === "about"} action={() => setTab("about")}>
        About
      </TabButton>
      <TabButton isActive={tab === "posts"} action={() => setTab("posts")}>
        Posts (slow)
      </TabButton>
      <TabButton isActive={tab === "contact"} action={() => setTab("contact")}>
        Contact
      </TabButton>
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </div>
  );
}

export default TabContainer;
