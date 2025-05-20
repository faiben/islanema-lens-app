import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, GraduationCap, Users } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

const supportFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  supportType: z.enum(["financial", "professional", "community"], {
    required_error: "Please select a way you'd like to support.",
  }),
  givingLevel: z.enum(["patron", "founder", "partnership", "none"], {
    required_error: "Please select a giving level."
  }).default("none"),
  amount: z.string().optional(),
  involvementAreas: z.array(z.string()).optional(),
  message: z.string().optional(),
});

type SupportFormValues = z.infer<typeof supportFormSchema>;

const SupportForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  // Get parameters from URL if they exist
  const levelParam = queryParams.get('level');
  const typeParam = queryParams.get('type');
  
  const defaultValues: Partial<SupportFormValues> = {
    supportType: typeParam === 'partnership' ? 'financial' : (typeParam as "financial" | "professional" | "community" || "financial"),
    givingLevel: levelParam as "patron" | "founder" | "partnership" | "none" || "none",
    involvementAreas: [],
  };
  
  const form = useForm<SupportFormValues>({
    resolver: zodResolver(supportFormSchema),
    defaultValues,
  });
  
  const watchSupportType = form.watch("supportType");
  
  const onSubmit = (data: SupportFormValues) => {
    toast({
      title: "Form submitted",
      description: "Thank you for your support! We will contact you soon.",
    });
    console.log(data);
    
    // In a real application, you would send this data to your backend
    // For now, we'll just redirect to the support page after a delay
    setTimeout(() => {
      navigate("/support");
    }, 2000);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <Section className="bg-islanema-gold text-islanema-blue" fullWidth>
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Join the Movement</h1>
            <p className="text-xl">
              Complete this form to support Islanema through financial contributions, professional expertise, or community involvement
            </p>
          </div>
        </div>
      </Section>
      
      <Section>
        <div className="max-w-3xl mx-auto">
          <Card className="p-6 md:p-8 shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif font-medium text-islanema-blue">Your Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif font-medium text-islanema-blue">How Would You Like to Support?</h2>
                  
                  <FormField
                    control={form.control}
                    name="supportType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                          >
                            <FormItem 
                              className={`flex flex-col items-center space-y-3 rounded-md border-2 p-6 cursor-pointer transition-all duration-300 ${
                                field.value === "financial" 
                                  ? "border-islanema-green bg-islanema-green/5 shadow-md" 
                                  : "border-gray-200 hover:border-islanema-green/50 hover:bg-islanema-green/5"
                              }`}
                              onClick={() => field.onChange("financial")}
                            >
                              <FormControl>
                                <RadioGroupItem value="financial" className="sr-only" />
                              </FormControl>
                              <div className={`rounded-full p-4 ${field.value === "financial" ? "bg-islanema-green/20" : "bg-gray-100"}`}>
                                <Heart className={`h-10 w-10 ${field.value === "financial" ? "text-islanema-green" : "text-gray-400"}`} />
                              </div>
                              <FormLabel className={`font-medium text-xl ${field.value === "financial" ? "text-islanema-green" : ""}`}>Financial Support</FormLabel>
                              <p className="text-sm text-center text-gray-500">Donate to fund our programs, scholarships, and operations</p>
                            </FormItem>
                            
                            <FormItem 
                              className={`flex flex-col items-center space-y-3 rounded-md border-2 p-6 cursor-pointer transition-all duration-300 ${
                                field.value === "professional" 
                                  ? "border-islanema-gold bg-islanema-gold/5 shadow-md" 
                                  : "border-gray-200 hover:border-islanema-gold/50 hover:bg-islanema-gold/5"
                              }`}
                              onClick={() => field.onChange("professional")}
                            >
                              <FormControl>
                                <RadioGroupItem value="professional" className="sr-only" />
                              </FormControl>
                              <div className={`rounded-full p-4 ${field.value === "professional" ? "bg-islanema-gold/20" : "bg-gray-100"}`}>
                                <GraduationCap className={`h-10 w-10 ${field.value === "professional" ? "text-islanema-gold" : "text-gray-400"}`} />
                              </div>
                              <FormLabel className={`font-medium text-xl ${field.value === "professional" ? "text-islanema-gold" : ""}`}>Professional Support</FormLabel>
                              <p className="text-sm text-center text-gray-500">Offer your expertise, mentorship, and industry connections</p>
                            </FormItem>
                            
                            <FormItem 
                              className={`flex flex-col items-center space-y-3 rounded-md border-2 p-6 cursor-pointer transition-all duration-300 ${
                                field.value === "community" 
                                  ? "border-islanema-blue bg-islanema-blue/5 shadow-md" 
                                  : "border-gray-200 hover:border-islanema-blue/50 hover:bg-islanema-blue/5"
                              }`}
                              onClick={() => field.onChange("community")}
                            >
                              <FormControl>
                                <RadioGroupItem value="community" className="sr-only" />
                              </FormControl>
                              <div className={`rounded-full p-4 ${field.value === "community" ? "bg-islanema-blue/20" : "bg-gray-100"}`}>
                                <Users className={`h-10 w-10 ${field.value === "community" ? "text-islanema-blue" : "text-gray-400"}`} />
                              </div>
                              <FormLabel className={`font-medium text-xl ${field.value === "community" ? "text-islanema-blue" : ""}`}>Community Support</FormLabel>
                              <p className="text-sm text-center text-gray-500">Volunteer your time, spread awareness, and help build our community</p>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {watchSupportType === "financial" && (
                    <>
                      <FormField
                        control={form.control}
                        name="givingLevel"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Select a Giving Level</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="space-y-3"
                              >
                                <FormItem className="flex items-start space-x-3 space-y-0 rounded-md border p-4">
                                  <FormControl>
                                    <RadioGroupItem value="patron" />
                                  </FormControl>
                                  <div className="space-y-1">
                                    <FormLabel className="text-base font-medium">Patron ($10,000-$24,900)</FormLabel>
                                    <FormDescription>
                                      Named recognition in program, private screening invitations, annual impact report
                                    </FormDescription>
                                  </div>
                                </FormItem>
                                
                                <FormItem className="flex items-start space-x-3 space-y-0 rounded-md border p-4">
                                  <FormControl>
                                    <RadioGroupItem value="founder" />
                                  </FormControl>
                                  <div className="space-y-1">
                                    <FormLabel className="text-base font-medium">Founder ($25,000+)</FormLabel>
                                    <FormDescription>
                                      All Patron benefits, named scholarship opportunity, advisory board consideration, VIP program events
                                    </FormDescription>
                                  </div>
                                </FormItem>
                                
                                <FormItem className="flex items-start space-x-3 space-y-0 rounded-md border p-4">
                                  <FormControl>
                                    <RadioGroupItem value="partnership" />
                                  </FormControl>
                                  <div className="space-y-1">
                                    <FormLabel className="text-base font-medium">Corporate/Institutional Partnership</FormLabel>
                                    <FormDescription>
                                      Custom partnership packages for media companies, educational institutions, and foundations
                                    </FormDescription>
                                  </div>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Custom Amount (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter a custom amount" {...field} />
                            </FormControl>
                            <FormDescription>
                              If you prefer to specify a different amount than the giving levels above
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                  
                  {watchSupportType === "professional" && (
                    <FormField
                      control={form.control}
                      name="involvementAreas"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel className="text-base">Areas of Professional Expertise</FormLabel>
                            <FormDescription>
                              Select the areas where you can offer professional support
                            </FormDescription>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {[
                              { id: "mentoring", label: "Industry mentorship" },
                              { id: "teaching", label: "Guest teaching" },
                              { id: "internships", label: "Offering internships" },
                              { id: "equipment", label: "Equipment lending" },
                              { id: "collaboration", label: "Project collaboration" },
                              { id: "other", label: "Other (specify in message)" }
                            ].map((item) => (
                              <FormField
                                key={item.id}
                                control={form.control}
                                name="involvementAreas"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(item.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...(field.value || []), item.id])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== item.id
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {item.label}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  
                  {watchSupportType === "community" && (
                    <FormField
                      control={form.control}
                      name="involvementAreas"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel className="text-base">Community Involvement</FormLabel>
                            <FormDescription>
                              Select ways you'd like to support our community
                            </FormDescription>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {[
                              { id: "volunteer", label: "Volunteer opportunities" },
                              { id: "awareness", label: "Spreading awareness" },
                              { id: "fundraising", label: "Community fundraising" },
                              { id: "events", label: "Event hosting" },
                              { id: "recruitment", label: "Student recruitment" },
                              { id: "other", label: "Other (specify in message)" }
                            ].map((item) => (
                              <FormField
                                key={item.id}
                                control={form.control}
                                name="involvementAreas"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(item.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...(field.value || []), item.id])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== item.id
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {item.label}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Share any additional details, questions, or specific ways you'd like to help"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-islanema-green hover:bg-islanema-blue text-white"
                >
                  Submit
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to be contacted by the Islanema team regarding your support.
                </p>
              </form>
            </Form>
          </Card>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default SupportForm;
