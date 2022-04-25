import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useRouter } from "next/router";

const HomePage: NextPage = () => {
    const router = useRouter()

    return (
        <div className="c-container">
            <Header />

            <main className="main">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: -100
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    }}
                >
                    <h1 className="title text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        HOME Page
                    </h1>
                </motion.div>
                <button type="button" onClick={() => router.push('/post')}>
                    Post
                </button>
                <button type="button" onClick={() => router.push('/result')}>
                    Result
                </button>
                <article>
                    <h1>Hello Next.js</h1>
                    <p>
                        This is the content of the page.
                    </p>
                </article>
            </main>

            <Footer />
        </div>
    )
}

export default HomePage
