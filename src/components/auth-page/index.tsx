"use client";
import { AppIcon } from "@components/app-icon";
import { AuthPage as AuthPageBase, ThemedTitleV2 } from "@refinedev/antd";
import type { AuthPageProps } from "@refinedev/core";

export const AuthPage = (props: AuthPageProps) => {
  return (
    <AuthPageBase
      {...props}
      formProps={{
        initialValues: {
          email: "info@refine.dev",
          password: "refine-supabase",
        },
      }}
      title={
        <ThemedTitleV2
          collapsed={false}
          text="Refine Project"
          icon={<AppIcon />}
        />
      }
    />
  );
};
