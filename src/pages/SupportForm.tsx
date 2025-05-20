
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Check, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group';

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  supportType: z.enum(['financial', 'professional', 'community']),
  givingLevel: z.enum(['patron', 'founder', 'partnership']).optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const SupportForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const query = new URLSearchParams(window.location.search);
  const initialSupportType = query.get('type') || 'financial';
  const initialGivingLevel = query.get('level') || '';

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      supportType: initialSupportType as 'financial' | 'professional' | 'community',
      givingLevel: (initialGivingLevel as 'patron' | 'founder' | 'partnership') || undefined,
      message: "",
    },
  });

  const supportType = form.watch('supportType');

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast({
      title: "Your support form has been submitted",
      description: "Thank you for your interest in supporting Islanema Film Academy.",
    });
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Section 
        title="Support Islanema Film Academy" 
        subtitle="Join us in transforming media representation and cultivating the next generation of Muslim storytellers"
        className="bg-islanema-gold/10"
      >
        <div className="max-w-3xl mx-auto">
          <Link to="/support" className="inline-flex items-center text-islanema-blue hover:text-islanema-green mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Support Page
          </Link>

          {isSubmitted ? (
            <Card className="border-islanema-green">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-islanema-green/20 flex items-center justify-center mb-4">
                  <Check className="text-islanema-green w-6 h-6" />
                </div>
                <h2 className="text-2xl font-serif font-medium mb-4">Thank You for Your Support</h2>
                <p className="text-gray-700 mb-6">
                  We've received your information and someone from our team will be in touch soon. 
                  Together, we're creating a new future for Muslim representation in media.
                </p>
                <Button asChild>
                  <Link to="/">Return to Homepage</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Contact Information */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-serif font-medium mb-6 text-islanema-blue">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name*</FormLabel>
                          <FormControl>
                            <Input placeholder="Your first name" {...field} />
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
                          <FormLabel>Last Name*</FormLabel>
                          <FormControl>
                            <Input placeholder="Your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email*</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email address" {...field} />
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
                          <FormLabel>Phone (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Support Type */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-serif font-medium mb-6 text-islanema-blue">How Would You Like to Support Us?</h2>
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
                            <FormItem className="flex flex-col items-center space-y-3 bg-islanema-green/10 rounded-lg p-4 cursor-pointer">
                              <FormControl>
                                <RadioGroupItem value="financial" id="financial" className="sr-only" />
                              </FormControl>
                              <Label
                                htmlFor="financial"
                                className={`text-center cursor-pointer w-full h-full ${field.value === 'financial' ? 'text-islanema-green font-medium' : ''}`}
                              >
                                <h3 className="text-lg mb-2">Financial Support</h3>
                                <p className="text-sm text-gray-600">Donate to help fund scholarships, equipment, and program development</p>
                              </Label>
                            </FormItem>
                            <FormItem className="flex flex-col items-center space-y-3 bg-islanema-gold/10 rounded-lg p-4 cursor-pointer">
                              <FormControl>
                                <RadioGroupItem value="professional" id="professional" className="sr-only" />
                              </FormControl>
                              <Label
                                htmlFor="professional"
                                className={`text-center cursor-pointer w-full h-full ${field.value === 'professional' ? 'text-islanema-gold font-medium' : ''}`}
                              >
                                <h3 className="text-lg mb-2">Professional Support</h3>
                                <p className="text-sm text-gray-600">Offer mentorship, internships, or industry expertise</p>
                              </Label>
                            </FormItem>
                            <FormItem className="flex flex-col items-center space-y-3 bg-islanema-blue/10 rounded-lg p-4 cursor-pointer">
                              <FormControl>
                                <RadioGroupItem value="community" id="community" className="sr-only" />
                              </FormControl>
                              <Label
                                htmlFor="community"
                                className={`text-center cursor-pointer w-full h-full ${field.value === 'community' ? 'text-islanema-blue font-medium' : ''}`}
                              >
                                <h3 className="text-lg mb-2">Community Support</h3>
                                <p className="text-sm text-gray-600">Volunteer, host events, or spread awareness in your community</p>
                              </Label>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Giving Level - Only shown for financial support */}
                {supportType === 'financial' && (
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-serif font-medium mb-6 text-islanema-blue">Giving Level</h2>
                    <FormField
                      control={form.control}
                      name="givingLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                              <FormItem className="flex flex-col items-center space-y-3 border rounded-lg p-4 cursor-pointer hover:border-islanema-gold">
                                <FormControl>
                                  <RadioGroupItem value="patron" id="patron" className="sr-only" />
                                </FormControl>
                                <Label
                                  htmlFor="patron"
                                  className={`text-center cursor-pointer w-full h-full ${field.value === 'patron' ? 'text-islanema-blue font-medium' : ''}`}
                                >
                                  <h3 className="text-lg font-medium mb-1">Patron</h3>
                                  <p className="text-islanema-green font-semibold mb-2">$10,000-$24,900</p>
                                  <p className="text-sm text-gray-600">Recognition, private screenings, annual impact report</p>
                                </Label>
                              </FormItem>

                              <FormItem className="flex flex-col items-center space-y-3 border rounded-lg p-4 cursor-pointer hover:border-islanema-blue">
                                <FormControl>
                                  <RadioGroupItem value="founder" id="founder" className="sr-only" />
                                </FormControl>
                                <Label
                                  htmlFor="founder"
                                  className={`text-center cursor-pointer w-full h-full ${field.value === 'founder' ? 'text-islanema-blue font-medium' : ''}`}
                                >
                                  <h3 className="text-lg font-medium mb-1">Founder</h3>
                                  <p className="text-islanema-green font-semibold mb-2">$25,000+</p>
                                  <p className="text-sm text-gray-600">Named scholarship, advisory board consideration, VIP access</p>
                                </Label>
                              </FormItem>

                              <FormItem className="flex flex-col items-center space-y-3 border rounded-lg p-4 cursor-pointer hover:border-islanema-green md:col-span-2">
                                <FormControl>
                                  <RadioGroupItem value="partnership" id="partnership" className="sr-only" />
                                </FormControl>
                                <Label
                                  htmlFor="partnership"
                                  className={`text-center cursor-pointer w-full h-full ${field.value === 'partnership' ? 'text-islanema-blue font-medium' : ''}`}
                                >
                                  <h3 className="text-lg font-medium mb-1">Corporate & Institutional Partnership</h3>
                                  <p className="text-islanema-green font-semibold mb-2">Custom Package</p>
                                  <p className="text-sm text-gray-600">For media companies, educational institutions, and foundations</p>
                                </Label>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Message */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-serif font-medium mb-6 text-islanema-blue">Additional Information</h2>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message (optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Share any additional details about how you'd like to support Islanema Film Academy..." 
                            className="h-32"
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
                  size="lg"
                  className="w-full md:w-auto bg-islanema-blue hover:bg-islanema-green"
                >
                  Submit Support Form
                </Button>
              </form>
            </Form>
          )}
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default SupportForm;
