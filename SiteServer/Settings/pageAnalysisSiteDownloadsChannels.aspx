<%@ Page Language="C#" Inherits="SiteServer.BackgroundPages.Settings.PageAnalysisSiteDownloadsChannels" %>
  <%@ Register TagPrefix="ctrl" Namespace="SiteServer.BackgroundPages.Controls" Assembly="SiteServer.BackgroundPages" %>
    <!DOCTYPE html>
    <html>

    <head>
      <meta charset="utf-8">
      <!--#include file="../inc/head.html"-->
      <script src="../assets/echarts/echarts.js?v=6.3.12"></script>
    </head>

    <body>
      <form class="m-l-15 m-r-15" runat="server">

        <div class="card-box">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="pageAnalysisSite.aspx">站点数据统计</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pageAnalysisSiteHits.aspx">内容点击统计</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="pageAnalysisSiteDownloads.aspx">文件下载统计</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pageAnalysisAdminLogin.aspx">管理员登录统计</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pageAnalysisAdminWork.aspx">管理员工作统计</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pageAnalysisUser.aspx">会员数据统计</a>
            </li>
          </ul>
        </div>

        <ctrl:alerts runat="server" />

        <div class="card-box">
          <div class="form-inline">
            <div class="form-group">
              <label class="col-form-label m-r-10">站点</label>
              <asp:DropDownList ID="DdlSiteId" class="form-control" AutoPostBack="true" OnSelectedIndexChanged="Analysis_OnClick"
                runat="server" />
            </div>
          </div>

          <hr />

          <div style="width: 100%">
            <div id="Download" style="height: 400px; width: 100%; display: inline-block"></div>
            <script type="text/javascript">
              require.config({
                paths: {
                  echarts: '../assets/echarts'
                }
              });
              require(
                [
                  'echarts',
                  'echarts/chart/bar'
                ],
                function (ec) {
                  var newChart = ec.init(document.getElementById('Download'));
                  var xArrayDownload = [];
                  var yArrayDownload = [];
                  var DownloadTitle = "文件下载量";

                  <%=StrArray%>

                  if (xArrayDownload.length == 0) {
                    xArrayDownload = ["暂无数据"];
                    yArrayDownload = [0];
                  }

                  var option = {
                    tooltip: {
                      show: true
                    },
                    legend: {
                      data: []
                    },
                    xAxis: [{
                      type: 'category',
                      data: []
                    }],
                    yAxis: [{
                      type: 'value'
                    }],
                    series: [{
                      "name": DownloadTitle,
                      "type": "bar",
                      "data": []
                    }]
                  };
                  option.xAxis[0].data = xArrayDownload;
                  option.series[0].data = yArrayDownload;
                  newChart.setOption(option);
                }
              );
            </script>
          </div>

          <div class="panel panel-default">
            <div class="panel-body p-0">
              <div class="table-responsive">
                <table class="table tablesaw table-hover m-0">
                  <thead>
                    <th>内容标题(点击查看)</th>
                    <th>所属栏目</th>
                    <th>附件地址</th>
                  </thead>
                  <tbody>
                    <asp:Repeater ID="RptContents" runat="server">
                      <ItemTemplate>
                        <tr>
                          <td>
                            <asp:Literal ID="ltlItemTitle" runat="server"></asp:Literal>
                          </td>
                          <td>
                            <asp:Literal ID="ltlChannel" runat="server"></asp:Literal>
                          </td>
                          <td>
                            <asp:Literal ID="ltlFileUrl" runat="server"></asp:Literal>
                          </td>
                        </tr>
                      </ItemTemplate>
                    </asp:Repeater>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <ctrl:SqlPager ID="SpContents" runat="server" class="table table-pager" />

        </div>

      </form>
    </body>

    </html>
    <!--#include file="../inc/foot.html"-->