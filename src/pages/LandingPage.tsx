import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Smartphone, PiggyBank, BarChart3, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-indigo-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Banking Made Simple</span>
              <span className="block text-indigo-200">For Everyone</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Experience the future of banking with our secure, innovative, and user-friendly financial solutions.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/auth"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/about"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Complete Banking Solutions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to manage your finances in one place
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <Smartphone className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Mobile Banking</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Bank on the go with our secure mobile app. Check balances, transfer money, and pay bills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <Shield className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Secure Banking</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Advanced security features to protect your money and personal information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <PiggyBank className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Smart Savings</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Automated savings tools and competitive interest rates to help your money grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose FinBank?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Experience banking that puts you first with innovative features and personalized service.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Bank-Grade Security</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Advanced encryption and multi-factor authentication keep your accounts safe.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Financial Insights</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Smart tools to track spending and help you reach your financial goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by Thousands
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              See what our customers have to say about their banking experience
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Small Business Owner",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  quote: "The mobile banking app has transformed how I manage my business finances. It's intuitive and saves me hours each week."
                },
                {
                  name: "Michael Chen",
                  role: "Tech Professional",
                  image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  quote: "The security features give me peace of mind, and the investment tools have helped me grow my portfolio significantly."
                },
                {
                  name: "Emily Rodriguez",
                  role: "Freelancer",
                  image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  quote: "As a freelancer, having a bank that understands my unique needs is crucial. FinBank delivers on all fronts."
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg px-6 py-8">
                  <div className="flex items-center">
                    <img className="h-12 w-12 rounded-full" src={testimonial.image} alt="" />
                    <div className="ml-4">
                      <div className="text-lg font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-base text-indigo-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="mt-6 text-base text-gray-500">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-indigo-200">Open an account in minutes.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/auth"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Get Started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}