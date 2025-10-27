"use client";

import type React from "react";

import { useState } from "react";
import TitleSection from "./common/title-section";
import RevealOnScroll from "./framer/reveal-on-scroll";
import { submitFormAction } from "@/actions/form-actions";
import { FormSchemaType } from "@/types";
import { FormSchema } from "@/schemas/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

export default function Contact() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormSchemaType) => {
    try {
      setSuccess("");
      setError("");
      const res = await submitFormAction(values);
      if (res.success) {
        setSuccess(
          "Form submitted successfully! We will get back to you soon."
        );
        form.reset();
      } else {
        setError("Failed to submit. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative py-32 px-5 bg-gradient-to-b from-[#0a0a0a] to-[#1a0a2e]">
      <div className="max-w-[1400px] mx-auto">
        <TitleSection
          tagline=" 📧 GET IN TOUCH"
          title="Have Questions?"
          description=" Fill in the form below and we'll reply within 24 hours"
        />
        <RevealOnScroll>
          <div className="max-w-[800px] mx-auto p-6 md:p-14 bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[40px] backdrop-blur-xl shadow-[0_30px_80px_rgba(102,126,234,0.2)]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block mb-3 font-semibold text-[#e2e8f0]">
                        Name *
                      </FormLabel>
                      <FormControl>
                        <input
                          placeholder="Your full name"
                          disabled={form.formState.isSubmitting}
                          className="w-full px-6 py-4 bg-white/[0.03] border-2 border-white/10 rounded-2xl text-white placeholder:text-[#64748b] backdrop-blur-sm transition-all duration-300 focus:outline-none focus:border-[#667eea] focus:bg-[#667eea]/5 focus:shadow-[0_0_0_4px_rgba(102,126,234,0.1)]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block mb-3 font-semibold text-[#e2e8f0]">
                        Email *
                      </FormLabel>
                      <FormControl>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          disabled={form.formState.isSubmitting}
                          className="w-full px-6 py-4 bg-white/[0.03] border-2 border-white/10 rounded-2xl text-white placeholder:text-[#64748b] backdrop-blur-sm transition-all duration-300 focus:outline-none focus:border-[#667eea] focus:bg-[#667eea]/5 focus:shadow-[0_0_0_4px_rgba(102,126,234,0.1)]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block mb-3 font-semibold text-[#e2e8f0]">
                        Store URL *
                      </FormLabel>
                      <FormControl>
                        <input
                          placeholder="https://yourstore.com"
                          disabled={form.formState.isSubmitting}
                          className="w-full px-6 py-4! bg-white/[0.03] border-2 border-white/10 rounded-2xl text-white placeholder:text-[#64748b] backdrop-blur-sm transition-all duration-300 focus:outline-none focus:border-[#667eea] focus:bg-[#667eea]/5 focus:shadow-[0_0_0_4px_rgba(102,126,234,0.1)]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block mb-3 font-semibold text-[#e2e8f0]">
                        Message / Notes
                      </FormLabel>
                      <FormControl>
                        <textarea
                          placeholder="Tell us about your specific migration requirements..."
                          rows={6}
                          maxLength={700}
                          minLength={10}
                          disabled={form.formState.isSubmitting}
                          className="w-full px-6 py-4 bg-white/[0.03] border-2 border-white/10 rounded-2xl text-white placeholder:text-[#64748b] backdrop-blur-sm transition-all duration-300 resize-vertical focus:outline-none focus:border-[#667eea] focus:bg-[#667eea]/5 focus:shadow-[0_0_0_4px_rgba(102,126,234,0.1)]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {success && (
                  <p className="text-green-400 text-sm text-center bg-green-500/10 px-3 py-3 rounded-md font-semibold border border-green-500/30">
                    {success}
                  </p>
                )}
                {error && (
                  <p className="text-red-400 text-sm text-center bg-red-500/10 px-3 py-3 rounded-md font-semibold border border-red-500/30">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="relative overflow-hidden w-full px-8 py-5 rounded-2xl bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(102,126,234,0.6)] group"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#764ba2] to-[#667eea] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </Form>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
