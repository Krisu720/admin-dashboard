"use client";

import Breadcrumbs from "@/components/custom/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const page = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const formValidator = z.object({
    to: z.string().min(1, { message: "Email required." }),
    subject: z.string().min(4, { message: "Minimum 4 characters." }),
    content: z.string().min(1, { message: "Content required." }),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<z.infer<typeof formValidator>>({
    resolver: zodResolver(formValidator),
  });

  const sendEmail: SubmitHandler<z.infer<typeof formValidator>> = async ({
    to,
    subject,
    content,
  }) => {
    setLoading(true);
    const payload = { to, subject, content };
    const res = await fetch("/api/email/", {
      body: JSON.stringify(payload),
      method: "POST",
    });
    const body = await res.json();
    if(res.ok) {
      toast({title: "Email sent."})
    } else {
      toast({title: "Error occured.",variant:"destructive"})
    }
    console.log(body);
    setLoading(false);
  };

  return (
    <div>
      <Breadcrumbs
        items={[
          { name: "Email", href: "/email" },
          { name: "Create email", href: "/email/create" },
        ]}
      />
      <div className="h-4" />
      <h1 className="text-3xl  font-extrabold">Create Email</h1>
      <div className="h-4" />
      <form onSubmit={handleSubmit(sendEmail)}>
        <fieldset disabled={loading ? true : undefined}>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="to">To</Label>
            <Input
              placeholder="email@example.com"
              id="to"
              {...register("to")}
            />
            {errors.to?.message && (
              <h1 className="text-red-500 my-1 text-sm">{errors.to.message}</h1>
            )}
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" {...register("subject")} />
            {errors.subject?.message && (
              <h1 className="text-red-500 my-1 text-sm">
                {errors.subject.message}
              </h1>
            )}
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" {...register("content")} />
            {errors.content?.message && (
              <h1 className="text-red-500 my-1 text-sm">
                {errors.content.message}
              </h1>
            )}
          </div>
          <div className="h-4" />
          <div className="flex justify-end">
            <Button>
              {loading && <Loader2 className=" h-6 w-6 animate-spin mr-2" />}
              Send Email
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default page;
