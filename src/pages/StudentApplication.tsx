
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, FileText, Check } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

// Form schema definition with validation
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  education: z.enum(["highSchool", "bachelors", "masters", "phd", "other"]),
  workExperience: z.string().min(10, "Please provide details about your work experience"),
  hasExperience: z.boolean(),
  track: z.enum(["writing", "directing", "producing"]),
  englishProficiency: z.enum(["beginner", "intermediate", "advanced", "native"]),
  arabicProficiency: z.enum(["none", "beginner", "intermediate", "advanced", "native"]),
  equipmentAccess: z.boolean(),
  timeCommitment: z.boolean(),
  ethicalAlignment: z.boolean(),
  statementOfPurpose: z.string().min(100, "Statement must be at least 100 characters"),
  portfolioDescription: z.string().min(50, "Please describe your portfolio items"),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const StudentApplication = () => {
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hasExperience: false,
      equipmentAccess: false,
      timeCommitment: false,
      ethicalAlignment: false,
      agreeToTerms: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    
    toast.success("Application submitted successfully!", {
      description: "We will review your application and get back to you soon.",
    });
    
    // Redirect to a thank you page or home page
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="bg-islanema-blue text-white" fullWidth>
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Student Application</h1>
            <p className="text-xl opacity-90">
              Join our program to become a skilled filmmaker grounded in Islamic ethics and storytelling
            </p>
          </div>
        </div>
      </Section>
      
      {/* Application Information */}
      <Section>
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4">Program Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-l-4 border-l-islanema-green">
                <CardContent className="pt-6">
                  <h3 className="font-medium text-lg mb-2">Writing Track</h3>
                  <p className="text-sm text-gray-600">8 seats available</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-islanema-terracotta">
                <CardContent className="pt-6">
                  <h3 className="font-medium text-lg mb-2">Directing Track</h3>
                  <p className="text-sm text-gray-600">4 seats available</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-islanema-gold">
                <CardContent className="pt-6">
                  <h3 className="font-medium text-lg mb-2">Producing Track</h3>
                  <p className="text-sm text-gray-600">4 seats available</p>
                </CardContent>
              </Card>
            </div>
            
            <h3 className="text-xl font-medium mb-3">Time Commitment</h3>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li><span className="font-medium">Online:</span> 3–6 hours per week (self-paced lectures + live discussions)</li>
              <li><span className="font-medium">Fez Residency:</span> 8 weeks full-time (travel costs borne by student; lodging provided)</li>
            </ul>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
              <p className="text-amber-800">
                <strong>Note:</strong> Selection is based on application strength, diversity of backgrounds, and alignment with program values.
              </p>
            </div>
          </div>
        </div>
      
        {/* Application Form */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-bold mb-6">Application Form</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information Section */}
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mt-4">
                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of Birth</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1940-01-01")
                              }
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              {/* Educational Background Section */}
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium mb-4">Educational Background</h3>
                
                <FormField
                  control={form.control}
                  name="education"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Highest Level of Education</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your education level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="highSchool">High School Diploma</SelectItem>
                          <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                          <SelectItem value="masters">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD or Doctorate</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Minimum requirement is high school diploma with 2+ years of relevant work experience
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="mt-4">
                  <FormField
                    control={form.control}
                    name="workExperience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Experience</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your relevant work experience in media, Islamic studies, or arts" 
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mt-4">
                  <FormField
                    control={form.control}
                    name="hasExperience"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            No formal degrees but have relevant portfolio
                          </FormLabel>
                          <FormDescription>
                            Check this if you don't meet the formal education requirements but wish to submit a portfolio for consideration
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              {/* Program Track Selection */}
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium mb-4">Program Track</h3>
                
                <FormField
                  control={form.control}
                  name="track"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Select your preferred track</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="writing" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Writing Track (8 seats)
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="directing" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Directing Track (4 seats)
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="producing" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Producing Track (4 seats)
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Language Proficiency */}
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium mb-4">Language Proficiency</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="englishProficiency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>English Proficiency</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your English level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="native">Native Speaker</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          All coursework is delivered in English
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="arabicProficiency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Arabic Proficiency</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your Arabic level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="native">Native Speaker</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Helpful for Qur'anic modules but not mandatory
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              {/* Technical Readiness & Commitment */}
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium mb-4">Technical Readiness & Commitment</h3>
                
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="equipmentAccess"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I have access to required equipment
                          </FormLabel>
                          <FormDescription>
                            Laptop/tablet with internet access and ability to use basic software like Celtx (scriptwriting) or Canva (storyboarding)
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="timeCommitment"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I can commit to the required time
                          </FormLabel>
                          <FormDescription>
                            3–6 hours/week online (self-paced lectures + live discussions) and 8 weeks full-time for the Fez Residency
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="ethicalAlignment"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the ethical guidelines
                          </FormLabel>
                          <FormDescription>
                            My content will align with Islamic ethics (no explicit material, interest-based financing, etc.) and I will respect diverse perspectives within Islamic frameworks
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              {/* Statement & Portfolio */}
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium mb-4">Statement & Portfolio</h3>
                
                <FormField
                  control={form.control}
                  name="statementOfPurpose"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Statement of Purpose</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="500-word essay on your goals and Islamic storytelling vision" 
                          className="min-h-40"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Explain why you want to join the program and your vision for Islamic storytelling
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="mt-6">
                  <FormField
                    control={form.control}
                    name="portfolioDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Portfolio Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your scripts, stories, short films, or essays demonstrating your creativity" 
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          If you have an online portfolio, please include links. You will be contacted later to submit additional materials if needed.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              {/* Terms and Submission */}
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <FormField
                  control={form.control}
                  name="agreeToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 mb-6">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to the terms and conditions
                        </FormLabel>
                        <FormDescription>
                          By checking this box, I confirm that all information provided is accurate and complete to the best of my knowledge
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full md:w-auto">
                  <FileText className="mr-2 h-4 w-4" />
                  Submit Application
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default StudentApplication;
