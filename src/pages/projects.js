import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icon";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ykkt from "../../public/images/projects/ykkt.png";
import gonsa from "../../public/images/projects/gonsa.png";
import bizbookly from "../../public/images/projects/bizbookly.png";
import bizbooklyStaff from "../../public/images/projects/bizbookly_staff.png";
import lady from "../../public/images/projects/lady.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FuturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg flex justify-center"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>

        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            Can&apos;t public
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto shadow-2xl shadow-dark"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline "
          >
            Can&apos;t public
          </Link>
          <Link href={""} className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Huy | Projects</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Projects show case" className="mb-16" />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FuturedProject
                title={"Yakult Khai Thác"}
                summary={
                  "An staff’s app for converting from paper processes to app processes for easier task management."
                }
                link={"/"}
                type={"Featured Project"}
                img={ykkt}
                github={"/"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Trung Tâm Dược Phẩm"}
                link={"/"}
                type={"Project"}
                img={gonsa}
                github={"/"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"SalonBookly"}
                link={"https://apps.apple.com/vn/app/apple-store/id1630656771"}
                type={"Project"}
                img={bizbookly}
                github={"/"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"SalonBookly Staff"}
                link={
                  "https://apps.apple.com/vn/app/salonbookly-staff/id1630657030"
                }
                type={"Project"}
                img={bizbooklyStaff}
                github={"/"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Yakult Lady"}
                link={"/"}
                type={"Project"}
                img={lady}
                github={"/"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
