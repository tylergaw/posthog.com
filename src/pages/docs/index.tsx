import React from 'react'

import Layout from 'components/Layout'
import { SEO } from 'components/seo'
import Link from 'components/Link'
import PostLayout from 'components/PostLayout'
import List from 'components/List'
import { CallToAction } from 'components/CallToAction'

const quickLinks = [
    {
        icon: 'Graph',
        name: 'Product analytics',
        to: '/docs/product-analytics',
        description: 'Better understand your users and build better products',
        color: 'blue',
    },
    {
        icon: 'RewindPlay',
        name: 'Session recording',
        to: '/docs/session-replay',
        description: 'Play back sessions to diagnose UI issues and get inspired',
        color: 'yellow',
    },
    {
        icon: 'Toggle',
        name: 'Feature flags',
        to: '/docs/feature-flags',
        description: 'Toggle features to test the impact before rolling out',
        color: 'seagreen',
    },
    {
        icon: 'Flask',
        name: 'A/B testing',
        to: '/docs/experiments',
        description: 'A/B test UI changes and new features',
        color: 'purple',
    },
    {
        icon: 'Person',
        name: 'CDP',
        to: '/docs/cdp',
        description: 'Get a complete picture of all your data',
        color: 'yellow',
    },
    {
        icon: 'Server',
        name: 'Data warehouse',
        to: '/docs/data-warehouse',
        description: 'Extend PostHog by adding your own functionality',
        color: 'teal',
    },
]

export const DocsIndex = () => {
    return (
        <Layout>
            <SEO title="Documentation - PostHog" />

            <PostLayout article={false} title={'Docs'} hideSidebar hideSurvey>
                <section className="mb-4 flex flex-col-reverse lg:flex-row gap-4 lg:gap-8">
                    <div className="flex-1 text-center sm:text-left">
                        <h1>Product OS is your all-in-one toolbox for building better products</h1>
                        <p className="text-[17px]">To get started, select a product from the list below.</p>
                    </div>
                </section>

                <section className="mb-4 lg:flex-row gap-4 lg:gap-8">
                    <h2>Products</h2>
                    <List
                        className="grid md:grid-cols-2 gap-1"
                        items={quickLinks.map(({ icon, name, to, description, color }) => ({
                            label: name,
                            url: to,
                            icon,
                            description,
                            iconColor: color,
                        }))}
                    />
                </section>

                <section className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="border border-light dark:border-dark bg-accent dark:bg-accent-dark p-6 xl:p-8 rounded">
                        <h3 className="text-xl mb-2">Data</h3>
                        <p className="text-[15px]">
                            Learn how to manage events and customer data for use with all PostHog products.
                        </p>
                        <CallToAction to="/docs/data" type="outline" size="md" className="!w-full sm:!w-auto">
                            Explore
                        </CallToAction>
                    </div>
                    <div className="@container border border-light dark:border-dark bg-accent dark:bg-accent-dark p-6 xl:p-8 rounded">
                        <h3 className="text-xl mb-2">Apps</h3>
                        <p className="text-[15px]">
                            Extend functionality with third-party apps that integrate into the PostHog ecosystem.
                        </p>
                        <div className="flex flex-col @[14rem]:flex-row  items-start @[14rem]:items-center gap-4">
                            <CallToAction to="/docs/apps" type="outline" size="md" className="!w-full sm:!w-auto">
                                Explore
                            </CallToAction>
                            <Link to="/apps" className="text-sm">
                                Browse apps
                            </Link>
                        </div>
                    </div>
                    <div className="border border-light dark:border-dark bg-accent dark:bg-accent-dark p-6 xl:p-8 rounded">
                        <h3 className="text-xl mb-2">API</h3>
                        <p className="text-[15px]">
                            Push or pull data to build custom functionality or create bespoke views for your business
                            needs.
                        </p>
                        <CallToAction to="/docs/api" type="outline" size="md" className="!w-full sm:!w-auto">
                            Explore
                        </CallToAction>
                    </div>
                </section>
            </PostLayout>
        </Layout>
    )
}

export default DocsIndex
