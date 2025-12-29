"use client"

import type React from "react"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { scholarships } from "@/data/scholarships"
import { services } from "@/data/services"
import { useLanguage } from "@/contexts/language-context"
import { useNotification } from "@/components/notification"
import { validateForm, commonValidationRules } from "@/lib/validation"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Check, CreditCard, FileText, Upload, User, AlertCircle, X } from "lucide-react"

export default function ApplyPage() {
  const { t } = useLanguage()
  const { showNotification } = useNotification()
  const searchParams = useSearchParams()
  const preselectedScholarship = searchParams.get("scholarship")
  const preselectedService = searchParams.get("service")

  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    selectedScholarships: preselectedScholarship ? [preselectedScholarship] : [],
    servicePackage: preselectedService || "",
    documents: {
      cv: null as File | null,
      sop: null as File | null,
      transcript: null as File | null,
      passport: null as File | null,
    },
    additionalInfo: "",
  })

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleScholarshipToggle = (scholarshipId: string) => {
    setFormData((prev) => {
      const isSelected = prev.selectedScholarships.includes(scholarshipId)
      return {
        ...prev,
        selectedScholarships: isSelected
          ? prev.selectedScholarships.filter((id) => id !== scholarshipId)
          : [...prev.selectedScholarships, scholarshipId],
      }
    })
  }

  const validateStep = (stepNumber: number): boolean => {
    let stepErrors: Record<string, string> = {}

    switch (stepNumber) {
      case 1:
        stepErrors = validateForm(formData, {
          fullName: commonValidationRules.fullName,
          email: commonValidationRules.email,
          phone: commonValidationRules.phone,
        })
        break
      case 2:
        if (formData.selectedScholarships.length === 0) {
          stepErrors.selectedScholarships = "Please select at least one scholarship"
        }
        break
      case 3:
        // Document validation - at least CV is required
        if (!formData.documents.cv) {
          stepErrors.cv = "CV/Resume is required"
        }
        break
      case 4:
        if (!formData.servicePackage) {
          stepErrors.servicePackage = "Please select a service package"
        }
        break
    }

    setErrors(stepErrors)
    return Object.keys(stepErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(4)) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      showNotification({
        type: "success",
        title: "Application Submitted Successfully!",
        message: "We'll review your application and get back to you within 24 hours.",
      })

      // Reset form or redirect
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        selectedScholarships: [],
        servicePackage: "",
        documents: { cv: null, sop: null, transcript: null, passport: null },
        additionalInfo: "",
      })
      setStep(1)
    } catch (error) {
      showNotification({
        type: "error",
        title: "Submission Failed",
        message: "Please try again or contact support if the problem persists.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1)
    }
  }

  const prevStep = () => setStep((prev) => prev - 1)

  const progress = (step / 4) * 100

  const stepTitles = [
    t.application.personalInfo,
    t.application.selectScholarships,
    t.application.uploadDocuments,
    t.application.servicePackage,
  ]

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t.application.title}</h1>
        <p className="text-muted-foreground">{t.application.subtitle}</p>
      </div>

      {/* Enhanced Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                  step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {s === 1 && <User className="h-5 w-5" />}
                {s === 2 && <FileText className="h-5 w-5" />}
                {s === 3 && <Upload className="h-5 w-5" />}
                {s === 4 && <CreditCard className="h-5 w-5" />}
              </div>
              <span
                className={`text-xs text-center max-w-20 ${step >= s ? "text-foreground" : "text-muted-foreground"}`}
              >
                {stepTitles[s - 1]}
              </span>
            </div>
          ))}
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>{t.application.personalInfo}</CardTitle>
              <CardDescription>{t.application.personalInfoDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="fullName">{t.application.fullName} *</Label>
                <Input
                  id="fullName"
                  placeholder={t.application.fullName}
                  value={formData.fullName}
                  onChange={(e) => updateFormData("fullName", e.target.value)}
                  className={errors.fullName ? "border-red-500" : ""}
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.fullName}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="email">{t.application.email} *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t.application.email}
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="phone">{t.application.phone} *</Label>
                <Input
                  id="phone"
                  placeholder="+251 91 234 5678"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.phone}
                  </p>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  Format: +251 followed by 9 digits or 0 followed by 9 digits
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={nextStep} disabled={!formData.fullName || !formData.email || !formData.phone}>
                {t.common.next}
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 2: Scholarship Selection */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>{t.application.selectScholarships}</CardTitle>
              <CardDescription>{t.application.selectScholarshipsDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scholarships.map((scholarship) => (
                  <div
                    key={scholarship.id}
                    className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-muted/50"
                  >
                    <Checkbox
                      id={`scholarship-${scholarship.id}`}
                      checked={formData.selectedScholarships.includes(scholarship.id)}
                      onCheckedChange={() => handleScholarshipToggle(scholarship.id)}
                    />
                    <div className="flex-1">
                      <Label htmlFor={`scholarship-${scholarship.id}`} className="font-medium cursor-pointer">
                        {scholarship.title}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {scholarship.university}, {scholarship.country} • {scholarship.degreeType} •{" "}
                        {t.scholarships.deadline}: {scholarship.deadline}
                      </p>
                      {scholarship.description && (
                        <p className="text-xs text-muted-foreground mt-1">{scholarship.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {errors.selectedScholarships && (
                <Alert className="mt-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{errors.selectedScholarships}</AlertDescription>
                </Alert>
              )}

              {formData.selectedScholarships.length > 0 && (
                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">Selected Scholarships ({formData.selectedScholarships.length}):</h4>
                  <div className="space-y-1">
                    {formData.selectedScholarships.map((id) => {
                      const scholarship = scholarships.find((s) => s.id === id)
                      return scholarship ? (
                        <div key={id} className="flex items-center justify-between text-sm">
                          <span>{scholarship.title}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => handleScholarshipToggle(id)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ) : null
                    })}
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                {t.common.previous}
              </Button>
              <Button onClick={nextStep} disabled={formData.selectedScholarships.length === 0}>
                {t.common.next}
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 3: Document Upload */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>{t.application.uploadDocuments}</CardTitle>
              <CardDescription>{t.application.uploadDocumentsDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { key: "cv", label: t.application.cv, required: true },
                { key: "sop", label: t.application.sop, required: false },
                { key: "transcript", label: t.application.transcript, required: false },
                { key: "passport", label: t.application.passport, required: false },
              ].map(({ key, label, required }) => (
                <div key={key}>
                  <Label htmlFor={key}>
                    {label} {required && "*"}
                  </Label>
                  <div className="mt-2">
                    <Input
                      id={key}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        updateFormData("documents", {
                          ...formData.documents,
                          [key]: e.target.files?.[0] || null,
                        })
                      }
                      className={errors[key] ? "border-red-500" : ""}
                    />
                  </div>
                  {errors[key] && (
                    <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors[key]}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    {t.application.acceptedFormats} ({t.application.maxFileSize})
                  </p>
                  {formData.documents[key as keyof typeof formData.documents] && (
                    <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                      <Check className="h-3 w-3" />
                      {formData.documents[key as keyof typeof formData.documents]?.name}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <Label htmlFor="additionalInfo">{t.application.additionalInfo}</Label>
                <Textarea
                  id="additionalInfo"
                  placeholder={t.application.additionalInfoPlaceholder}
                  value={formData.additionalInfo}
                  onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                  className="mt-2"
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                {t.common.previous}
              </Button>
              <Button onClick={nextStep}>{t.common.next}</Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 4: Service Package & Payment */}
        {step === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>{t.application.servicePackage}</CardTitle>
              <CardDescription>{t.application.servicePackageDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup
                value={formData.servicePackage}
                onValueChange={(value) => updateFormData("servicePackage", value)}
                className="space-y-4"
              >
                {services.map((service) => (
                  <div key={service.id} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                    <RadioGroupItem value={service.id} id={`service-${service.id}`} className="mt-1" />
                    <div className="flex flex-1 justify-between items-start">
                      <Label htmlFor={`service-${service.id}`} className="cursor-pointer flex-1">
                        <div className="font-medium">{service.title}</div>
                        <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                        <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-1">
                              <Check className="h-3 w-3 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </Label>
                      <div className="text-lg font-semibold text-primary ml-4">
                        {service.price.toLocaleString()} ETB
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>

              {errors.servicePackage && (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{errors.servicePackage}</AlertDescription>
                </Alert>
              )}

              <div className="pt-6 border-t">
                <h3 className="text-lg font-medium mb-4">{t.application.paymentMethod}</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg bg-green-50">
                    <Checkbox id="payment-chapa" checked readOnly />
                    <Label htmlFor="payment-chapa" className="cursor-pointer">
                      <div className="font-medium">Pay with Chapa</div>
                      <p className="text-sm text-muted-foreground">Ethiopian payment gateway - Secure & Fast</p>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-3 border rounded-lg opacity-50">
                    <Checkbox id="payment-paypal" disabled />
                    <Label htmlFor="payment-paypal" className="cursor-pointer text-muted-foreground">
                      <div className="font-medium">Pay with PayPal</div>
                      <p className="text-sm">International payment (Coming soon)</p>
                    </Label>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <Accordion type="single" collapsible>
                  <AccordionItem value="summary">
                    <AccordionTrigger>{t.application.orderSummary}</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>{t.application.selectedService}:</span>
                          <span className="font-medium">
                            {services.find((s) => s.id === formData.servicePackage)?.title || "None selected"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t.application.numberOfScholarships}:</span>
                          <span className="font-medium">{formData.selectedScholarships.length}</span>
                        </div>
                        <div className="flex justify-between text-lg font-semibold pt-2 border-t">
                          <span>{t.application.total}:</span>
                          <span className="text-primary">
                            {formData.servicePackage
                              ? `${services.find((s) => s.id === formData.servicePackage)?.price.toLocaleString()} ETB`
                              : "0 ETB"}
                          </span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                {t.common.previous}
              </Button>
              <Button type="submit" disabled={!formData.servicePackage || isSubmitting} className="gap-2">
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Check className="h-4 w-4" />
                    {t.application.submitApplication}
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        )}
      </form>
    </div>
  )
}
