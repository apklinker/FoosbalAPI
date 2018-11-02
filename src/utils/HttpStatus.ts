const KDoc = { status: (_: any) => {
  // Do nothing
}};

KDoc.status({
    name: 'Continue',
});
// tslint:disable-next-line:variable-name
const _continue = 100;
KDoc.status({
    name: 'Processing',
});
const processing = 102;

KDoc.status({
    name: 'OK',
    when: 'Nothing was wrong with your request, responded with requested data.',
});
const ok = 200;
KDoc.status({
    name: 'Created',
});
const created = 201;
KDoc.status({
    name: 'Accepted',
});
const accepted = 202;
KDoc.status({
    name: 'No Content',
});
const noContent = 204;

KDoc.status({
    name: 'Bad Reqeust',
    when: 'Something was wrong with the data in the request. Dobule check types/typos.',
});
const badReqeust = 400;
KDoc.status({
    name: 'Unauthorized',
    when: 'The endpoint you are requesting required authentication, and none/bad auth is provided.',
});
const unauthorized = 401;
KDoc.status({
    name: 'Forbidden',
});
const forbidden = 403;
KDoc.status({
    name: 'Not Found',
    when: 'The endpoint you are trying to reach does not exist. Check spelling.',
});
const notFound = 404;

KDoc.status({
    name: 'Internal Server Error',
    when: 'Unknown server error was thrown. If it occurs again for the same request, submit a bug report.',
});
const internalServerError = 500;
KDoc.status({
    name: 'Not Implmented',
    when: 'Accidental mistake left from development. Report if noticied.',
});
const notImplmented = 501;

export default {
    _continue,
    processing,

    accepted,
    created,
    noContent,
    ok,

    badReqeust,
    forbidden,
    notFound,
    unauthorized,

    internalServerError,
    notImplmented,
};
