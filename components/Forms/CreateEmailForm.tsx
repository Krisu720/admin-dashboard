"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const CreateEmailForm = ({}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const formValidator = z.object({
    to: z.string().min(1, { message: "Email required." }),
    subject: z.string().min(4, { message: "Minimum 4 characters." }),
    content: z.string().min(1, { message: "Content required." }),
  });

  type FormValidator = z.infer<typeof formValidator>;

  const formRef = useRef<HTMLFormElement>(null);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormValidator>({
    resolver: zodResolver(formValidator),
  });

  const sendEmail: SubmitHandler<FormValidator> = async ({
    to,
    subject,
    content,
  }) => {
    setLoading(true);
    const payload = { to, subject, content };
    try {
      const res = await fetch("/api/email/", {
        body: JSON.stringify(payload),
        method: "POST",
      });
      const body = await res.json();
      if (res.ok) {
        toast({ title: "Email sent." });
      } else {
        toast({ title: "Error occured.", variant: "destructive" });
      }
      console.log(body);
    } catch(e) {
      toast({ title: "Error occured.", variant: "destructive" });
    }

    setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit(sendEmail)} ref={formRef}>
      <fieldset disabled={loading ? true : undefined}>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="to">To</Label>
          <Input placeholder="email@example.com" id="to" {...register("to")} />
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
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                {loading && <Loader2 className=" h-6 w-6 animate-spin mr-2" />}
                Send Email
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>Do you really want to send email?</DialogHeader>
              <DialogFooter>
                <DialogClose
                  asChild
                  onClick={() => formRef.current?.requestSubmit()}
                >
                  <Button type="submit">send</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="destructive">cancel</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </fieldset>
    </form>
  );
};

export default CreateEmailForm;
