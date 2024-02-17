import { StackContext, StaticSite } from "sst/constructs";

export function Web({ stack }: StackContext) {
  const web = new StaticSite(stack, "web", {
    path: "packages/web",
    buildOutput: "dist",
    buildCommand: "npm run build",
    customDomain:
      stack.stage === "prod"
        ? {
            domainName: "galer7.com",
            hostedZone: "galer7.com",
          }
        : undefined,
  });

  stack.addOutputs({
    Web: web.customDomainUrl || web.url,
  });
}
